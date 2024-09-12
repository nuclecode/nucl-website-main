import React, { useState } from 'react';
import { TbCoins } from "react-icons/tb";
import { PiHandCoinsDuotone } from "react-icons/pi";
import './TestCalculator.scss';
import ContactCustomersForm from '../contactCustomersForm/contactCustomersForm';

const TestCalculator = () => {
  const [manualTests, setManualTests] = useState(0);
  const [unitTests, setUnitTests] = useState(0);
  const [integrationTests, setIntegrationTests] = useState(0);
  const [endToEndTests, setEndToEndTests] = useState(0);
  const [accessibilityTests, setAccessibilityTests] = useState(0);

  const calculateTotal = () => {
    return (manualTests * 1) + (unitTests * 1) + (integrationTests * 3) + (endToEndTests * 5) + (accessibilityTests * 10);
  };

  return (
    <div className="calculator-container">
      <h3>Test Price Calculator</h3>
      <div className="input-group">
        <label>Manual or Automated</label> 
          <label>Unit Test (£1 each):</label>
        <input
          type="number"
          value={unitTests}
          onChange={(e) => setUnitTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Integration Test (£3 each):</label>
        <input
          type="number"
          value={integrationTests}
          onChange={(e) => setIntegrationTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>End-To-End Test (£5 each):</label>
        <input
          type="number"
          value={endToEndTests}
          onChange={(e) => setEndToEndTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Accessibility Testing (£10 per page):</label>
        <input
          type="number"
          value={accessibilityTests}
          onChange={(e) => setAccessibilityTests(Number(e.target.value))}
        />
      </div>
      <h4>Total Cost: £{calculateTotal()}</h4>

      <div className="input-group">
        <ContactCustomersForm />
      </div>

    </div>
  );
};

export default TestCalculator;