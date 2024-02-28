function Solutions ()
{
    return (
        <div className="solutions-container">
          <div className="solutions-header">
            <h1>Our Solutions</h1>
            <p>Discover how we can help your business succeed.</p>
          </div>
          <div className="solutions-content">
            <h2>Services</h2>
            <div className="services">
              <div className="service">
                <h3>Frontend Development</h3>
                <p>We specialize in creating engaging and user-friendly frontend interfaces.</p>
              </div>
              <div className="service">
                <h3>Backend Development</h3>
                <p>Our backend solutions are scalable, efficient, and tailored to your business needs.</p>
              </div>
              <div className="service">
                <h3>Software Testing</h3>
                <p>Ensure the quality and reliability of your software with our comprehensive testing services.</p>
                <ul>
                  <li>Android and iOS Testing</li>
                  <li>Website/PWA Testing</li>
                  <li>React App Testing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="solutions-banner">
            <h2>Ready to start?</h2>
            <p>Let's chat about how we can help your business thrive.</p>
            <button>Contact Us</button>
          </div>
        </div>
      );
}


export default Solutions;