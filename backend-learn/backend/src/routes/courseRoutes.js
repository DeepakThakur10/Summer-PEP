import express from "express";
import { getCourses } from "../controllers/courses/getCourses.js";
import { addCourses } from "../controllers/courses/addCourse.js";
import { myCourses } from "../controllers/courses/myCourses.js";

const router = express.Router();

router.get("/get-courses", getCourses);

router.post("/add-course", addCourses);
router.get("/my-courses", myCourses);

export default router;