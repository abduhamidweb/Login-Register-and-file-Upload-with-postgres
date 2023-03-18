import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import ejs from "ejs"
import path from 'path'
import fileUpload from 'express-fileupload'
dotenv.config()
import users from '../routers/users.routes.js'
import students from '../routers/students.routes.js'
import auth from './../routers/auth.routes.js';
const PORT = process.env.PORT || 3000
const app = express()
app.use(cors("*"));
app.use(express.json());

 
 
app.use(express.static("./public"));
app.engine("html", ejs.renderFile); 
app.set("view engine", "html");
app.set(".html", path.join(process.cwd(), "views"));
app.get("/", (req, res) => res.render("index"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));

app.post('/upload', (req, res) => {
  console.log(req.body)
  console.log(req.headers.token)
})


app.use(users)
app.use(students) 
app.use(auth)
app.listen(PORT, console.log('Server is running' + PORT))
     
   
    
 
// const ejs = require("ejs");
// const path = require("path");
// const cors = require("cors");
// const express = require("express");
// const fileUpload = require("express-fileupload");
// require("dotenv").config();
// const { users } = require("../router/users.routes");
// const { auth } = require("../router/auth.routes");
// const { students } = require("../router/students.routes");
// const PORT = process.env.PORT || 3000;
// const app = express();

// app.use(fileUpload());
// app.use(express.json());
// app.use(cors("*"));
// app.use(express.static("./public"));
// app.engine("html", ejs.renderFile);
// app.set("view engine", "html");
// app.set(".html", path.join(process.cwd(), "views"));
// app.get("/", (req, res) => res.render("index"));
// app.get("/register", (req, res) => res.render("register"));
// app.get("/login", (req, res) => res.render("login"));

