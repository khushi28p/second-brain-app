import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import { port, jwtSecret } from "./config";
import { userMiddleware } from "./middleware";
import { ContentModel } from "./db";

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
        //@ts-ignore
        userId: req.userId,
        tags:[]
    })
    
    res.json({
        message:"Content added"
    })
});

app.get("/api/v1/content", async (req, res) => {});

app.delete("/api/v1/content", async (req, res) => {});

app.post("/api/v1/brain/share", async (req, res) => {});

app.get("/api/v1/brain/:shareLink", async (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
