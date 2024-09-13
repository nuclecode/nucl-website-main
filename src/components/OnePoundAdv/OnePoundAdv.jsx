import React, { useState } from 'react';
import './OnePoundAdv.scss';
import { TbCoins } from "react-icons/tb";
import { PiCoinVerticalLight, PiHandCoinsDuotone } from "react-icons/pi";
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Snackbar, Alert } from '@mui/material'; 


const OnePoundAdv = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset alerts
    setShowAlert(false);
    setShowErrorAlert(false);

    try {
      await addDoc(collection(db, 'callback'), {
        phone: phone,
        email: email,
        timestamp: serverTimestamp(),
      });

      // Clear input fields after submission
      setPhone('');
      setEmail('');

      // Show success alert
      setShowAlert(true);

    } catch (error) {
      console.error("Error saving data to database:", error);
      setShowErrorAlert(true);
    }
  };

  return (
    <div className="one-pound-adv">
      {/* Success and Error Alerts */}
      {showAlert && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={true} autoHideDuration={5000}>
          <Alert severity="success" variant="filled">
            Thank you! We'll get in touch with you shortly.
          </Alert>
        </Snackbar>
      )}

      {showErrorAlert && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={true} autoHideDuration={5000}>
          <Alert severity="error" variant="filled">
            Sorry, there was an error. Please try again.
          </Alert>
        </Snackbar>
      )}

      <div className="adv-header">
        <h2 className="adv-title">Special Offer: Testing Services with Big Discounts!</h2>
        <TbCoins className="svg-offer-icon" />
      </div>
      
      <p className="adv-description">
        Get manual or automated tests:
        <ul>
          <ul>Unit test - £1 per test, Integration test - £3 per test</ul>
          <ul>End-To-End - £5 per test, Accessibility testing - £10 per webpage</ul>
        </ul>
        Don't miss out on this great deal. Let our experts ensure that your software runs flawlessly.
      </p>

      <div className="discount-banner">
        <PiCoinVerticalLight className="discount-icon" />
        <PiCoinVerticalLight className="discount-icon" />
        <PiCoinVerticalLight className="discount-icon" />
        <span className="discount-text">Up to 50% Off!</span>
      </div>

      <p className="cta-text">Calculate your savings with our Test Price Calculator</p>

      {/* Contact Form */}
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
        <a href="tel:+447355573823" className="btn">Call Us Now</a>
        <a href="mailto:hire@nuclecode.uk" className="btn">Email Us</a>
      </div>

      <p className="adv-footer">Leave your contact info, and we'll reach out to you shortly.</p>

      <div className="moving-image-container">
        <PiHandCoinsDuotone className="moving-image" />
      </div>
    </div>
  );
};

export default OnePoundAdv;