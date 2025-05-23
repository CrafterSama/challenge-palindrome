import express from "express";

const mainRouter = express.Router();

mainRouter.get("/ping", (req, res) => {
  res.json({
    message: "pong",
  });
});

export default mainRouter;
