import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import announcementRouter from "./routes/announcementRoutes.js";
import quizRouter from "./routes/quizRoutes.js";
import cors from "cors";

const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("connected to mongooDB succefully");
});

app.use(cors());
app.use(express.json());

app.use("/announcement", announcementRouter);
app.use("/quiz", quizRouter);

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    ststus: error.statusText,
    message: error.message,
    code: error.statusCode || 500,
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
