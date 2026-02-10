import express from "express";

const app = express();

const PORT = 3333;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("Hello, World!");
});
