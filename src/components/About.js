function About ()
{
    return (
        <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Welcome to our company!</p>
        </div>
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>We are on a mission of delivering secure, scalable, and easy-to-maintain code.</p>
          <h2>Our Team</h2>
          <p>We are a team of professionals who dedicate their careers to deliver great software that would last.</p>
          {/* <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Michael Johnson - CFO</li>
          </ul> */}
          <h2>Our History</h2>
          <p>Learn more about our company's journey:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pretium magna in metus eleifend, a fringilla felis dictum.</p>
        </div>
      </div>
    )
}

export default About;