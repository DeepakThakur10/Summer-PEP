import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        firstName:{
            type: String,
            required: true,
            minlength: 2,
            trim:true
        },
        lastName:{
            type: String,
            required: true,
            trim: true

        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim:true

        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        role:{
            type: String,
            enum:["Student", "Instructor","Admin"],
            default: 'Student',
            required: true
        },
        course:{
            type: Schema.Types.ObjectId,
            ref: "Course",
            trim:true
        }

    }
)
const User = model("User",UserSchema);

export default User;
