import mongoose, { Schema, model } from "mongoose";

const CourseSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,

    },
    instructorId:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        min: 0
    },
    duration:{
        type: String,
        required: true
    },
    level:{
        type: String,
        required: true,
        enum:['Beginner','Intermediate','Advanced']
    },
    imageUrl:{
        type: String,
        required: true
    }


})

const Course = model("Course",CourseSchema);
export default Course;