require("dotenv").config();
const express = require("express");
// const router1 = require("./apiRouter");
const connection = require("./src/config/database");
const app = express();
const webRouters = require("./src/routers/web");
const port = process.env.PORT || 8088;
const host_name = process.env.HOST_NAME;

app.use("/v1/", webRouters);

//test connection
if (connection) {
  console.log("Kết nối thành công");
} else {
  console.log("Kết nối ko thành công");
}
app.listen(port, host_name, () => {
  console.log(`Example app listening on port ${port}`);
});
