import { Router } from "express";
import { getCourses } from "../controllers/courses/getCourses.js";
import { authenticate } from "../middleware/authentication.js";
import { authorize } from "../middleware/authorization.js";
import { addCourse } from "../controllers/courses/addCourse.js";
import { myCourses } from "../controllers/courses/myCourses.js";

import { enrollCourse } from "../controllers/courses/enrolledCourse.js";

const router = Router();

router.get('/get-courses', getCourses);

router.post('/create-course', authenticate, authorize('instructor', 'admin'), addCourse );

router.get('/myCourses', authenticate, authorize('instructor', 'admin'), myCourses  );

router.get('/enrollCourse', authenticate, authorize('instructor', 'student'), enrollCourse )


export default router;