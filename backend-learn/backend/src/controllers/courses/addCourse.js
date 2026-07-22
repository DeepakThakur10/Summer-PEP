import Course from "../../models/Course";

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


}