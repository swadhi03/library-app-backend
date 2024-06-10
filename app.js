const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product =require("./models/library")

const app = express()
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/contact",(req,res)=>{
    res.send("welcome")
})

app.listen(8083,()=>{
    console.log("server success")
})

