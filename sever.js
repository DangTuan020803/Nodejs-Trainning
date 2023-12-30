const express = require("express");
const router1 = require("./apiRouter");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("Home");
});

app.use("/admin/api/v1/", router1);
app.use("/api/v1/", router1);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
