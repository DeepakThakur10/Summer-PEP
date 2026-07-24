import User from "../../models/User.js";

export const myCourses = async (req, res) => {
    try {
        const userId = req.user.id;

        const data = await User.findById(userId).populate(
            req.user.role === 'instructor '?(
                'createdCourses'
            ):(
                'enrolledCourses'
            )
        );

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        console.log
        return res.status(200).json({
            success: true,
            message: "Courses fetched successfully",
            courses: data.course,
        });
    } catch (error) {
        console.error("Error fetching user courses:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};