const express = require("express");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("hi!");
});

app.listen(port, () => console.log(`running on http://localhost:${port}`));
