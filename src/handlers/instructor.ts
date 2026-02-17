import { validationResult } from "express-validator";
import prisma from "../db";

export const createInstructor = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const instructor = await prisma.instructor.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            user: {
                connect: {
                    id: req.user
                }
            }
        }
    });
    return res.status(201).json(instructor);
    
};

export const getInstructors = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const instructor = await prisma.instructor.findUnique({
        where: { id: +req.params.id },
        include: { courses: true }
    });
    return res.status(200).json(instructor);
}