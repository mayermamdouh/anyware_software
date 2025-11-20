import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    publishedAt: { type: Date, default: Date.now },
    createdBy: { type: String },
    attachments: [String],
    isUrgent: { type: Boolean, default: false }
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

export default Announcement;
