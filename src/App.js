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
import Frontend from './components/solutions/Frontend';
import Backend from './components/solutions/Backend';
import Testing from './components/solutions/Testing';
import Case1 from './components/case-studies/Case1';
import Case2 from './components/case-studies/Case2';
import Case3 from './components/case-studies/Case3';

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
        <Routes>
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/software-testing" element={<Testing />} />
        </Routes>
        <Routes>
          <Route path="/case1" element={<Case1 />} />
          <Route path="/case2" element={<Case2 />} />
          <Route path="/case3" element={<Case3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
    
  );
}

export default App;
