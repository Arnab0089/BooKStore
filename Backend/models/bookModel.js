import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published_Year: {
        type: Number,
        required: true,
    },
    
},
{
    timestamps: true
});

export const Book= mongoose.model('Book',bookSchema); // Create a model from the schema