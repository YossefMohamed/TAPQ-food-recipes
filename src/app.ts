import express from "express";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import { indexRouter } from "./routes";
import morgan from "morgan";
import { Router } from "express";
import { errorHandler } from "./middlewares/error-handler";
import cors from "cors";
import session from "express-session";
import { IUser } from "./models/userModel";
const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors(corsOptions));
const router = Router();
app.use(morgan("dev"));
app.use(express.json());

declare module "express-session" {
  interface SessionData {
    user: IUser;
  }
}

app.use(
  session({
    secret: process.env.sessionSecret || "mysecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.get("/", (req, res) => {
  res.send("server is running");
});

router.use("/api", indexRouter);
app.use(router);

app.use(errorHandler);

export { app };
