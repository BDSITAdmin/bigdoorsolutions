import HomePage from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import './index.css';
import FooterSection from './components/footerSection.jsx';
import Footer from './components/footer.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes> 
      <Route path="/" element={<HomePage />} />   
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
    <FooterSection/>
    <Footer/> 
  </Router>
);
