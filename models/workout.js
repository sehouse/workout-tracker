const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                },
                name: {
                    type: String,
                    trim: true,
                },
                time: {
                    type: Number,
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
