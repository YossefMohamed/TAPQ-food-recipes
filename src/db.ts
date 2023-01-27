import mongoose from "mongoose";
import { DatabaseConnectionError } from "./errors/database-connection-error";
const connectDB = () => {
  mongoose
    .connect(process.env.dbURI!)
    .then(() => console.log("connected"))
    .catch((err) => {
      console.log(err);

      throw new DatabaseConnectionError();
    });
};

export { connectDB };
