/**
 * Fetch data from the course Table
 * Insert the data into Course Table
 */

import { PrismaClient } from './prisma/index.js';

const prisma = new PrismaClient();

async function main() {
  // write queries here
  // insert the record into course table

  //we need a course model
  // const course = await prisma.course.create({
  //   data: {
  //     title: 'LEARN GATSBY',
  //     desc: 'Step by Step',
  //     duration: 3.5,
  //   },
  // });
  // //insert the record into course like title, desc, duration
  // console.log('Courses:', course); 

  const courses = await prisma.course.findMany();
  console.log('All Courses:', courses);

  // //create a new video
  // const video = await prisma.video.create({
  //   data: {
  //     title: 'RELATION',
  //     desc: 'ONE TO MANY',
  //     url: 'http://gatsbyjs.com/intro',
  //     courseId: 1    
  // }});
  // console.log('New Video:', video);
  const videos = await prisma.video.findMany({include: {Course: {}}});
  console.log(videos);

}

main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});

// api/courses GET
// api/course POST
// api/course PUT
// api/course/id GET
// api/course/id DELETE
