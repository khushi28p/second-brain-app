import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { UserModel } from './db';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json())

app.post("/api/v1/signup", async(req, res) => {
    const {username, password} = req.body;

    try{
        await UserModel.create({
        username, 
        password
    })

    res.json({message: "User created"})
    } catch(error){
        res.status(400).json({message: "User already exists"})
    }
})

app.post("/api/v1/signin", async(req, res) => {
    
})

app.post("/api/v1/content", async(req, res) => {
    
})

app.get("/api/v1/content", async(req, res) => {
    
})

app.delete("/api/v1/content", async(req, res) => {
    
})

app.post("/api/v1/brain/share", async(req, res) => {

})

app.get("/api/v1/brain/:shareLink", async(req, res) => {

})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});