import Course from "../../models/Course.js";

export const addCourses = async (req, res) => {
    const{
        title,
        instructor,
        price,
        duration,
        level,
        imageUrl
    } = req.body;

    if(!title || !instructor || !price || !duration || !level || !level || !imageUrl){
        return res.status(400).json({
            success: false,
            message: "All Information Required"
        })
    }

    const course = await Course.create({
        title,
        instructor,
        price,
        duration,
        level,
        imageUrl,
    });

    return res.status(201).json({
        success: true,
        message: "Course added successfully",
        course,
    })


}