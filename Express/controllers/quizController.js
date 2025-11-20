import Quiz from "../models/quiz_model.js";

import AppError from "../AppError.js";
import asyncWrapper from "../middleware/asyncWrapper.js";

export const createQuiz = asyncWrapper(async (req, res, next) => {
  const quizData = req.body;

  const addQuiz = await new Quiz(quizData);
  await addQuiz.save();
  res.status(201).json({ status: "success", data: { quiz: addQuiz } });
});

export const deleteQuiz = asyncWrapper(async (req, res, next) => {
  const quizId = req.params.id;

  const deleteQuiz = await Quiz.findById(quizId);
  if (deleteQuiz) {
    await Quiz.deleteOne({ _id: quizId });
    return res.status(200).json({ status: "success", data: null });
  }
  return next(AppError.create("Quiz not found", 404, "fail"));
});

export const updateQuiz = asyncWrapper(async (req, res, next) => {
  const quizId = req.params.id;
  const updateData = req.body;

  const updateQuiz = await Quiz.findByIdAndUpdate(quizId, updateData, {
    new: true,
    runValidators: true,
  });

  if (!updateQuiz) {
    return next(AppError.create("Quiz not found", 404, "fail"));
  }
  res.status(200).json({ status: "success", data: { updateQuiz } });
});

export const readQuiz = asyncWrapper(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    const error = AppError.create("Quiz not found ", 404, "fail");
    return next(error);
  }
  return res.json({ status: "success", data: { quiz } });
});

export const readAllQuizzes = asyncWrapper(async (req, res, next) => {
  // will get all quizes but when make model for user will get the quizes by "user id" foreign key
  const quizes = await Quiz.find();

  if (!quizes) {
    const error = AppError.create("Quizes is empty", 404, "fail");
    return next(error);
  }
  return res.json({ status: "success", data: { quizes } });
});
