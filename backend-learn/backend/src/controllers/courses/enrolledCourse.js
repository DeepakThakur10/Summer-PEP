import Course from "../../models/Course.js";
import User from "../../models/User.js";

export const enrollCourse = async (req,res) =>{
    const { courseId } = req.body;

    const course = await Course.findById(courseId);

    if(!course){
        return res.json({
            message: 'Course Not Found'
        })
    }
    await User.findByIdAndUpdate(
        req.user.id,
        {
            $addToSet: {
                enrolledCourses: courseId
            }
        }
    )
    res.json({
        message: 'Successfully Update '
    });
}