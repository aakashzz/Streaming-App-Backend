import multer from "multer";
import express from "express";
import cors from "cors"
import { v4 as uuid } from "uuid";

const app = express();

app.get("/", (req,res)=>{
    res.json({
        message:"Intro"
    })
})

app.listen(3000,()=>{
    console.log("Server Is running")
})