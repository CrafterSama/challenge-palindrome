import express from "express";
import wordsController from "../controllers/words.controller.js";

const wordsRouter = express.Router();

wordsRouter.get("/words", wordsController.index);
wordsRouter.get("/words-palindrome-checker", wordsController.store);

export default wordsRouter;
