import mongoose from "mongoose";

const hobbySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 100,
        },
        description: {
            type: String,
            maxlength: 500,
        },
        category: {
            type: String,
            enum: ["sports", "arts", "music", "gaming", "reading", "other"],
            default: "other",
        },
        frequency: {
            type: String,
            enum: ["daily", "weekly", "monthly", "rarely"],
            default: "rarely",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }

    );

export default mongoose.model("Hobby", hobbySchema);