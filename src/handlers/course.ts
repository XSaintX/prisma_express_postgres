import { validationResult } from "express-validator";
import prisma from "../db";


export const getCourses = async (req, res) => {
    //I would like to fetch all the courses on the based on instructor id
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const courses = await prisma.course.findMany({
        where: { instructorId: +req.params.instructorId },
        include: { Instructor: true }
    });
    res.status(200).json(courses);
}

export const createCourse = async (req, res) => {
    // Logic for creating a course will go here
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    //validate title, duration, desc and instructorId
    const course = await prisma.course.create({
        data: {
            title: req.body.title,
            desc: req.body.desc,
            duration: req.body.duration,
            instructorId: req.body.instructorId
        }     
    });
    //send the record back to response    
    return res.status(201).json(course);
}

export const getCourseById = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const course = await prisma.course.findUnique({
        where: { id: +req.params.id }
    });
    if (!course) {
        return res.status(404).json({ error: "Not found" });
    }
    return res.status(200).json(course);
}

export const deleteCourseById = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const deletedCourse = await prisma.course.delete({
        where: { id: parseInt(req.params.id) }
    });

    //perform the delete operation
    return res.status(200).json(deletedCourse);
}

//write the handler function
export const updateCourse = async (req, res) => {


//find the course by id
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const course = await prisma.course.findUnique({
        where: { id: +req.params.id }
    });

//perform the update operation
    const updatedCourse = await prisma.course.update({
        where: { id: parseInt(req.params.id) },
        data: req.body
    });
    return res.status(200).json(updatedCourse);
//you must have request body

//you can mention the updated fields in the update function

}