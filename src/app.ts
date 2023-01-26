import express, { NextFunction, Request, Response } from "express";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import { indexRouter } from "./routes";
import morgan from "morgan";
import { Router } from "express";
import { errorHandler } from "./middlewares/error-handler";
const app = express();
const router = Router();
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running");
});
app.use(router);

router.use("/api", indexRouter);

app.use(errorHandler);

export { app };
