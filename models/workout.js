const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
{
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please enter the exercise name",
      }, 
      type: {
        type: String,
        trim: true,
        required: "Please enter the exercise type",
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Please enter the exercise time in minutes",
      },
      distance: {
        type: Number,
      },
    },
  ],
},
{
    toJSON: {
        virtuals: true,
    },
},
);
