const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

const accounts = require("./data/accounts-model");

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

// your code here

server.get("/", async (req, res) => {
  try {
    const data = await accounts.find();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

server.get("/:id", async (req, res) => {
  try {
    const data = await accounts.findById();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
});

module.exports = server;
