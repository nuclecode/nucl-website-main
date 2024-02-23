import React from 'react';
import logo from './logo-website.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import EnquiryForm from './components/EnquiryForm';
import Navig from './components/Navig';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Navig />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/enquiry" component={EnquiryForm} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </div>
    
  );
}

export default App;
