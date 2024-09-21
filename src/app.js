const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const bankRouter = require("./router/bank.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("common"));
app.use(express.json());

app.use("/users", bankRouter);

module.exports = app;
