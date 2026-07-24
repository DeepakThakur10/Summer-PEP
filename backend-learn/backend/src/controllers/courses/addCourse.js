import Course from '../../models/Course.js';
import User from '../../models/User.js'

export const addCourse = async (req, res) => {
    try {
        const { 
            title,
            price,
            duration,
            level,
            imageUrl
        } = req.body;

        const course = await Course.create({
            title,
            instructorId: req.user.id,
            price,
            duration,
            level,
            imageUrl
        });

        await User.findByIdAndUpdate(
            req.user.id,
            {
                $push: {
                    createdCourses: course._id
                }
            }
        );

        res.json({
            message: 'Course created successfully',
            course
        })
        return;
        
    } catch (err) {
        console.log('Error: ', err);
        res.json({ message: 'Error while creating course' });
        return;
    }
}
