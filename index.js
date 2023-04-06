const express = require("express");
const port = 8000;
const app = express();
const mongoose = require("mongoose");
const Func = require("./models/Func");
require("dotenv").config();

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/funcs", async (req, res) => {
  const funcsDoc = await Func.find({});
  res.json(funcsDoc);
});

app.patch("/func/score/:id", async (req, res) => {
  const id = req.params.id;
  await Func.findOneAndUpdate(
    { id: id },
    {
      $inc: { score: 1 },
    }
  )
    .then(res.json("ok"))
    .catch((err) => console.log(err));
});

app.listen(port, () => console.log(`running on http://localhost:${port}`));
