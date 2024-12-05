import HomePage from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import './index.css';
import FooterSection from './components/footerSection.jsx';
import Footer from './components/footer.jsx';
import ProgramDetails from './internship.jsx';
import  ItServices from './ItServices.jsx';
import Course from './course.jsx';
import CourseDetails from './CourseDetails.jsx';



createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes> 
      <Route path="/" element={<HomePage />} />   
      <Route path="/AboutUs" element={<AboutUs />} />    
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ProgramDetails" element={<ProgramDetails/>} />
      <Route path="/ItServices" element={<ItServices/>} />
      <Route path="/course" element={<Course />} />
      <Route path="/CourseDetails" element={<CourseDetails />} />
    </Routes>
    <Footer/> 
  </Router>
);
