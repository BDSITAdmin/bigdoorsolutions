
import CourseImg from '../assets/Course Images.png';
import  CourseImg2 from '../assets/Clock.png';
import Fullstack from '../assets/Fullstack-image.jpg';
import Mern from '../assets/Mern-image.webp';
import Cloud from '../assets/Cloud-image.jpg';
export const courses = [
  {
    id: 1,
    title: "Full stack Web Development",
    description: "Full-stack development involves building both the front-end and back-end of web applications using technologies like JavaScript, Node.js,database..",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Fullstack,
    image1: CourseImg2,
    path: "/courses/Fullstackpage", // Add the unique path
  },
  {
    id: 2,
    title: "MERN Stack",
    description: "The MERN Stack is a collection of technologies, using those technologies to build full-stack applications....",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Mern,
    image1: CourseImg2,
    path: "/courses/Mernpage",
  },
  {
    id: 3,
    title: "Cloud Computing",
    description: "Cloud computing provides on-demand access to computing resources like storage and processing over the internet...",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Cloud,
    image1: CourseImg2,
    path: "/courses/Cloudpage",
  },
];