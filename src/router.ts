//define all my routes in this file

import prisma from "./db";
import { Router } from "express";
import { getCourses, createCourse, getCourseById, deleteCourseById, updateCourse } from "./handlers/course";
import { body, param } from "express-validator";
import { createInstructor, getInstructors } from "./handlers/instructor";
import { createVideo, getVideos } from "./handlers/video";
import { login, privateRoute, signup } from "./handlers/user";
import { authenticate } from "./middlewares/auth";

const router = Router();

/**
 * Course Routes
 * 
 */
router.get('/course/:instructorId', param('instructorId').isInt(), getCourses);//modify this route
router.post('/course', 
    body('title').isString().notEmpty(), 
    body('desc').isString().notEmpty(), 
    body('duration').isFloat().notEmpty(), 
    body('instructorId').isInt().optional(), 
    createCourse);

router.get('/course/:id', param('id').isInt(), getCourseById);
router.delete('/course/:id',param('id').isInt(), deleteCourseById);

router.put('/course/:id',param('id').isInt(), 
    body('title').isString().optional(), 
    body('desc').isString().optional(), 
    body('duration').isFloat().optional(), 
    body('instructorId').isInt().optional(), 
    updateCourse);

// export const getCourses = async (req, res) => {
//     const courses = await prisma.course.findMany();
//     res.status(200).json(courses);
// }

/**
 * Instructor Routes
 */
router.post('/instructor', authenticate, 
    body('email').isString().isEmail().notEmpty(),
    body('name').isString().notEmpty(),
    body('zip').isString().notEmpty(),
    body('country').isString().notEmpty(),
    body('city').isString().notEmpty(),
    createInstructor);

router.get('/instructor/:id', param('id').isInt(), getInstructors);
/**
 * Video Routes
 */
router.post('/videos',
body('title').isString().notEmpty(),
body('desc').isString().notEmpty(),
body('url').isString().notEmpty(),
body('hostingProvider').isString().notEmpty(),
body('key').isString().optional(),
body('metaData').isString().optional(),
 createVideo);
 
router.get('/videos', getVideos);

/**
 * User Routes
 */
router.post('/signup', 
    body('email').isString().isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    signup);

router.post('/login', 
    body('email').isString().isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    login);

router.get('/private', authenticate, privateRoute);
export default router;