const express= require('express');
const app=express();

app.get("", (req,res)=>{
          res.sendFile("/home/thhs16/Desktop/Courses/Web Dev/JS/node_modules/express/lib/A2_home.html");
})

app.get("/about", (req,res)=>{
          res.sendFile("/home/thhs16/Desktop/Courses/Web Dev/JS/node_modules/express/lib/A2_about.html");
})

app.get("/", (req,res)=>{
          res.sendFile("./A2_about.html");
})

app.get("/", (req,res)=>{
          res.sendFile("./A2_about.html");
})

app.listen(8080, ()=>{
          console.log("Server is starting.");
})