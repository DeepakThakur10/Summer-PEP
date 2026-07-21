import fs from "fs/promises";

export const getCourses = async (req, res) => {
    try {

        const courses = JSON.parse(
            await fs.readFile("data/course.json", "utf-8")
        );

        if (!courses.length) {
            return res.status(404).json({
                success: false,
                message: "No courses found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Courses fetched successfully",
            courses
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};