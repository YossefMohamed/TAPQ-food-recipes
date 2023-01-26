import express, { NextFunction, Request, Response } from "express";
import path from "path";
import { indexRouter } from "./routes";
import morgan from "morgan";
import { Router } from "express";
import { errorHandler } from "./middlewares/error-handler";
const app = express();
const router = Router();
router.use("/api", indexRouter);
app.use(morgan("dev"));
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(errorHandler);

export { app };
