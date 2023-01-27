import express from "express";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import { indexRouter } from "./routes";
import morgan from "morgan";
import { Router } from "express";
import { errorHandler } from "./middlewares/error-handler";
import cors from "cors";
import cookieSession from "cookie-session";
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
const router = Router();
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.get("/", (req, res) => {
  res.send("server is running");
});

router.use("/api", indexRouter);
app.use(router);

app.use(errorHandler);

export { app };
