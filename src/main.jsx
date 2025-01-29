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
import CourseDetails from './CourseDetails.jsx'

import MernDetails from './courses/Mernpage.jsx'
import AnalyticskillsDetails from './courses/Analyticalskillspage.jsx'
import BusinessetiquetteDetails from './courses/Businessetiquettepage.jsx'
import BusinesswritingDetails from './courses/Businesswritingpage.jsx'
import CertifiedSMDetails from './courses/CertifiedSMpage.jsx'
import CloudDetails from './courses/Cloudpage.jsx'
import CplusDetails from './courses/Cpluspage.jsx'
import CprogDetails from './courses/Cprogpage.jsx'
import FullstackDetails from './courses/Fullstackpage.jsx'
import OopsDetails from './courses/Oopspage.jsx'
import ProjectMPDetails from './courses/ProjectMPpage.jsx'
import ScaledAFDetails from './courses/ScaledAFpage.jsx'
import ScrollOnTop from './components/ScrollToTop.jsx';





createRoot(document.getElementById('root')).render(
  <Router>
    <ScrollOnTop/>
    <Navbar />
    <Routes> 
      <Route path="/" element={<HomePage />} />   
      <Route path="/AboutUs" element={<AboutUs />} />    
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ProgramDetails" element={<ProgramDetails/>} />
      <Route path="/ItServices" element={<ItServices/>} />
      <Route path="/course" element={<Course />} />
      <Route path="/CourseDetails" element={<CourseDetails />} />
      <Route path="/courses/Mernpage" element={<MernDetails />} />
      <Route path="/courses/Analyticalskillspage" element={<AnalyticskillsDetails/>} />
      <Route path="/courses/Businessetiquettepage" element={<BusinessetiquetteDetails/>} />
      <Route path="/courses/Businesswritingpage" element={<BusinesswritingDetails/>} />
      <Route path="/courses/CertifiedSMpage" element={<CertifiedSMDetails/>} />
      <Route path="/courses/Cloudpage" element={<CloudDetails/>} />
      <Route path="/courses/Cpluspage" element={<CplusDetails/>} />
      <Route path="/courses/Cprogpage" element={<CprogDetails/>} />
      <Route path="/courses/Fullstackpage" element={<FullstackDetails/>} />
      <Route path="/courses/Oopspage" element={<OopsDetails/>} />
      <Route path="/courses/ProjectMPpage" element={<ProjectMPDetails/>} />
      <Route path="/courses/ScaledAFpage" element={<ScaledAFDetails/>} />
    </Routes>
    <Footer/> 
  </Router>
);
