import express from "express";
import mongoose from "mongoose"; import data from "./data.js";
import Videos from "./dbmodel.js";
import Data from "./data.js";

// const express = require("express");
// const mongoose = require("mongoose");
// const data = require("./data.js");
// const Videos = require("./dbmodel.js");
// /app config
const app = express();
const port =  process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})

// db config

const connection_url =
  "mongodb+srv://admin:Rohit91138@cluster0.rkt0u.mongodb.net/Tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.post("/v2/posts", (req, res) => {
  // post request is to ada dATA TO THE DATABASE
  // IT WILL LET US ADD A VIDEO DOCUMENT TO THE VIDEOS COLLECTION
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, Data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(Data);
    }
  });
});

app.get("/v2/posts", (req, res) => {
    Videos.find((err, Data) => {
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(201).send(Data);
          }
        
    })
})

// listener

app.listen(port, () => console.log(`listening on localhost:${port}`));
