import React from 'react';
//import logo from './logo-website.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import EnquiryForm from './components/EnquiryForm';
import Solutions from './components/Solutions';
import Navig from './components/Navig';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Navig />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule-a-call" element={<EnquiryForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
    
  );
}

export default App;
