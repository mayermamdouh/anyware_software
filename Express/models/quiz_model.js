import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  durationMinutes: { type: Number, required: true },
  questions:[String],
  totalMarks: { type: Number, required: true },
  status: { type: String, enum: ["upcoming", "open", "closed"], default: "upcoming" },
  questionsCount: { type: Number, default: 0 }
});


const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;