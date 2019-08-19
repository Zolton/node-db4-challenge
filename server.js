const express = require("express");
const recipeRouter = require("./Router/recipeRouter");
const server = express();
server.use(express.json());
server.get("/", (req, res) => {
  res.status(200).json({ Hello: "From server.js" });
});
server.use("/recipes", recipeRouter);

//config only/CORS/helmet, etc - server.use(crap)

module.exports = server;
