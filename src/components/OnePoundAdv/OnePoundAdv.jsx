import React, { useState } from 'react';
import './OnePoundAdv.scss';
// import { addClientData } from '../../firebaseConfig'; // Firebase function

const OnePoundAdv = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // addClientData({ phone, email });
    setPhone('');
    setEmail('');
  };

  return (
    <div className="one-pound-adv">
      <div className="adv-header">
        <h2 className="adv-title">Special Offer: Testing Services with Big Discounts!</h2>
        <img src="/path-to-your-svg-image.svg" alt="Special Offer" className="svg-offer-icon" />
      </div>
      
      <p className="adv-description">
        Get manual tests for just £1, unit tests for £1, integration tests for £3, and end-to-end tests for £5.
        Don't miss out on this amazing deal. Let our experts ensure your software works flawlessly.
      </p>

      <div className="discount-banner">
        <img src="/path-to-your-discount-icon.svg" alt="Discount" className="discount-icon" />
        <span className="discount-text">Up to 50% Off!</span>
      </div>

      <p className="cta-text">Calculate your savings with our <a href="#calculator">Test Price Calculator</a></p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Get a Call Back</button>
      </form>

      <div className="action-buttons">
        <a href="tel:+YourPhoneNumber" className="btn">Call Us Now</a>
        <a href="mailto:YourEmail@example.com" className="button">Email Us</a>
      </div>

      <p className="adv-footer">Leave your contact info, and we'll reach out to you shortly.</p>

      <div className="moving-image-container">
        <img src="/path-to-moving-image.gif" alt="Moving Image" className="moving-image" />
      </div>
    </div>
  );
};

export default OnePoundAdv;



// import React from 'react';
// import './OnePoundAdv.scss';

// const OnePoundAdv = () => {
//   return (
//     <div className="one-pound-adv">
//       <h2 className="adv-title">Special Offer: Manual & Automated Testing</h2>
//       <p className="adv-description">
//         Get manual tests for just £1, unit tests for £1, integration tests for £3, and end-to-end tests for £5. 
//         Ensure your software works flawlessly with our expert testing services at unbeatable prices.
//       </p>
//       <div className="action-buttons">
//         <a href="tel:+YourPhoneNumber" className="btn">Call Us Now</a>
//         <a href="mailto:YourEmail@example.com" className="btn">Email Us</a>
//       </div>
//       <p className="adv-footer">Leave your phone number, and we'll call you back. Or, leave your email, and we'll get in touch shortly.</p>
//     </div>
//   );
// };
// export default OnePoundAdv;