
//const express = require('express');
import express from 'express';
import morgan from 'morgan';
import errorhandler from 'error-handler';
import { body, validationResult } from 'express-validator';
import router from './router';

const app = express();

// // custom middleware
// app.use((req, res, next) => {
//     console.log(`${req.url} ${new Date().toDateString()}`);
//     next(); // call the next middleware in the stack
// });

// apply third party middleware
app.use(morgan('dev'));
app.use(express.json()); //parse the request body for me

app.use('/api', router);

app.get('/', (req, res) => {
    // res.status(200);
    res.send('Hello World!');
    //throw new Error('ERROR');
});

// //GET api/course
// app.get('/api/courses', async (req, res) => {
//     //fetch all the courses from db
//     const courses = await prisma.course.findMany();
//     //get the prisma

//     //get the course from the prisma object

//     //call the many method

//     //send back to user as a json
//     res.status(200);
//     res.json(courses);
// });

// //POST api/course
// app.post('/api/courses', 
//     body('title').isString().notEmpty(), 
//     body('duration').isFloat().notEmpty(), 
//     body('desc').isFloat().notEmpty(), 
//     body('instructorId').isInt().optional(), 
//     async (req, res) => {
//     console.log(req.body);
//     // //create a new instructor
//     // const instructor = await prisma.instructor.create({
//     //     data: {
//     //         name: 'Jhonny Depp',
//     //         city: 'London',
//     //         country: 'UK',
//     //         email: 'john@gmail.com',
//     //         zip: '2300'
//     //     }
//     // });
//     // //insert a new course into the db   
//     // const course = await prisma.course.create({
//     //     data: {
//     //         title: 'LEARN SAILS',
//     //         desc: 'BUILD APIs',
//     //         duration: 12.4,
//     //         Instructor:{
//     //             connect:{
//     //                 id: instructor.id
//     //             }
//     //         }
//     //     }
//     // });

//     //validate our parameters
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors: errors.array()});
//     }
//     //validate title, duration, desc and instructorId
//     const course = await prisma.course.create({
//         data: {
//             title: req.body.title,
//             desc: req.body.desc,
//             duration: req.body.duration,
//             instructorId: req.body.instructorId
//             }        
//     });
//     //send the record back to response    
//     return res.status(201).json(course);
// });

// app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.error(`ERROR: ${error.stack}`);
//     next(error);
// });

if(process.env.NODE_ENV === 'development'){
    app.use(errorhandler());
}

//module.exports = app;
export default app;