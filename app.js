import express from "express";

const app = express();

const PORT = 3333;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});