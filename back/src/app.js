import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";

import mainRouter from "./routes/main.router.js";
import wordsRouter from "./routes/words.router.js";

dotenv.config();

export const app = express();

app.use(cors());
app.use(json());

/**
 * Routes for the challenge
 */
app.use(mainRouter);
app.use(wordsRouter);
