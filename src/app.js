const express = require("express");
const cors = require("cors");

const app = express();
const bankRouter = require("./router/bank.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use("/bank", bankRouter);

module.exports = app;
