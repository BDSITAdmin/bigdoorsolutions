
import CourseImg from '../assets/Course Images.png';
import  CourseImg2 from '../assets/Clock.png';
import Bwriting from '../assets/Bwriting-image.webp';
import Analytical from '../assets/Analytical-image.jpg';
import Betiquette from '../assets/Betiquette-image.jpg';


export const SoftSkill  = [
  {
    id: 1,
    title: "Business Writing",
    description: "Business writing is a style of writing used in a professional environment to communicate ideas, convey information, presuade stakeholders, or document events & processes.",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Bwriting,
    image1: CourseImg2,
    path: "/courses/Businesswritingpage",
    
  },
  {
    id: 2,
    title: "Analytical Skills",
    description: "Analytic skills are the ability to collect, process, and interpret data and information to solve problems, make decisions, or understand complex issues.",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Analytical,
    image1: CourseImg2,
    path: "/courses/Analyticalskillspage",
  },
  {
    id: 3,
    title: "Business Etiquette",
    description: "Business etiquette involves professional behavior, respect, and effective communication in the workplace. It helps maintain a positive and productive environment.",
    duration: "16hr",
    badge: "MOST POPULAR",
    image: Betiquette,
    image1: CourseImg2,
    path: "/courses/Businessetiquettepage",
  },
];


export default SoftSkill;