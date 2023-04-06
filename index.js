require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./src/routers/mainRouter");

const logger = morgan(
  ":method : url :status :res[content-length] - :response-time ms"
);
const server = express();
const host = "http://localhost:";
const port = process.env.PORT || 8000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(logger);
server.use(mainRouter);

server.get("/", (req, res) => {
  res.send("<h1>API Works</h1>");
});

server.listen(port, () => {
  console.log(`Server Running at : ${host}${port}`);
});
