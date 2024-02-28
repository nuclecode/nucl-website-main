import React from 'react';
import { Link } from 'react-router-dom';

function Home ()
{
    return (
<div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>We specialize in providing cutting-edge solutions for your business needs.</p>
        <Link to="/contact" className="cta-button">Get Started</Link>
      </section>
      
      <section className="services-section">
        <h2>Our Services</h2>
        <ul>
          <li><Link to="/frontend">Frontend Development</Link> - Crafting beautiful and intuitive user interfaces.</li>
          <li><Link to="/backend">Backend Development</Link> - Building robust and scalable server-side applications.</li>
          <li><Link to="/software-testing">Software Testing</Link> - Ensuring the quality and reliability of your software products.</li>
        </ul>
      </section>
      
      <section className="about-section">
        <h2>About Us</h2>
        <p>Learn more about our company and our mission to help businesses succeed.</p>
        <Link to="/about" className="read-more-link">Read More</Link>
      </section>
      
      <section className="portfolio-section">
        <h2>Our Portfolio</h2>
        <p>Explore some of our past projects and see how we've helped other businesses achieve their goals.</p>
        <Link to="/portfolio" className="view-portfolio-link">View Portfolio</Link>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have a project in mind or need assistance? Contact us today!</p>
        <Link to="/contact" className="contact-us-link">Contact Us</Link>
      </section>
    </div>
    );
}

export default Home;