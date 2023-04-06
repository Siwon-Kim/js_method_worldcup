const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// id, 이름, 설명, 점수,
const Func = new Schema({
  id: Number,
  name: String,
  content: String,
  score: Number,
});

const FuncModel = model("Func", Func);

module.exports = FuncModel;
