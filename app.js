const express = require("express")
const app = express()

// let app = require("express")()

app.get("/",(req,res)=>{
  res.send("hello world")
})

app.get("/about",(req,res)=>{
  res.send("About world")
})





app.listen(3000,function(){
  console.log("server/backend/project has started at port 3000")
})