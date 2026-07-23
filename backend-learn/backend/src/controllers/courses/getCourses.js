// import fs from "fs/promises";

import Course from "../../models/Course.js";

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        return res.status(200).json({
            success: true,
            message: courses.length
                ? "Courses fetched successfully"
                : "No courses found",
            courses,
        });
    } catch (error) {
        console.error("Error fetching courses:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};