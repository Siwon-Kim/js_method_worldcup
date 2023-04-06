const express = require("express");
const port = 8000;
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://sparta:test@cluster0.xzw0iic.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => console.log(`running on http://localhost:${port}`));
