import express from "express";
const router = express.Router();
import * as quizController from "../controllers/quizController.js";

router
  .route("/")
  .post(quizController.createQuiz)
  .get(quizController.readAllQuizzes);

router
  .route("/:id")
  .get(quizController.readQuiz)
  .patch(quizController.updateQuiz)
  .delete(quizController.deleteQuiz);

export default router;
