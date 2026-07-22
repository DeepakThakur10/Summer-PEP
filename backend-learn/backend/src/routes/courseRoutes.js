import express from "express";
import { getCourses } from "../controllers/courses/getCourses.js";
import { addCourse } from "../controllers/courses/addCourse.js";
import { myCourses } from "../controllers/courses/myCourses.js";

const router = express.Router();

router.get("/getCourses", getCourses);

router.post('/addCourse',addCourse);

router.post('/myCourses',myCourses)

export default router;