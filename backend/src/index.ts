declare global {
  namespace Express{
    export interface Request {
      userId?: string;
    }
  }
}

import express from "express";
import jwt from "jsonwebtoken";
import { LinkModel, UserModel } from "./db";
import { port, jwtSecret } from "./config";
import { userMiddleware } from "./middleware";
import { ContentModel } from "./db";
import { random } from "./utils";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    await UserModel.create({
      username,
      password,
    });

    res.json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({
      username,
      password,
    });

    if (existingUser) {
      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        jwtSecret!
      );

      res.json({ token });
    } else {
      res.status(403).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { title, link, tags } = req.body;

    await ContentModel.create({
        title,
        link,
        userId: req.userId,
        tags:[]
    })
    
    res.json({
        message:"Content added"
    })
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;

    const contents = await ContentModel.find({
        userId
    }).populate("userId", "username")

    res.json({
        contents
    })
});

app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;

    await ContentModel.findByIdAndDelete({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Content deleted"
    })
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
  const share = req.body.share;

  if(share){
    const existingLink = await LinkModel.findOne({
      userId: req.userId
    })

    if(existingLink){
      res.json({
        hash: existingLink.hash
      })
      return;
    }
    const hash = random(10);
    await LinkModel.create({
      userId: req.userId,
      hash: hash
    })

    res.json({
      message: "/share/" + hash
    })
  } else{
    await LinkModel.deleteOne({
      userId: req.userId
    })

    res.json({
      message: "Link deleted"
    })
  }
});

app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({
    hash
  });

  if(!link){
    res.status(411).json({
      message: "Link not found"
    })
    return;
  }

  const content = await ContentModel.find({
    userId: link.userId
  })

  const user = await UserModel.findOne({
    _id: link.userId
  })

  res.json({
    username: user?.username,
    content: content
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
