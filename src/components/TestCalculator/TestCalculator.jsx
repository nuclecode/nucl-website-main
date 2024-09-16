import React, { useState } from 'react';
import './TestCalculator.scss';
import ContactCustomersForm from '../contactCustomersForm/contactCustomersForm';

const TestCalculator = () => {
  const [unitTests, setUnitTests] = useState(60);
  const [integrationTests, setIntegrationTests] = useState(30);
  const [endToEndTests, setEndToEndTests] = useState(10);
  const [accessibilityTests, setAccessibilityTests] = useState(10);

  const calculateTotal = () => {
    return (unitTests * 1) + (integrationTests * 3) + (endToEndTests * 5) + (accessibilityTests * 10);
  };

  const handleFocus = (setFunction) => {
      setFunction('');
  };

  const handleBlur = (e, setFunction, defaultValue) => {
    if (e.target.value === '') {
      setFunction(defaultValue);
    } else {
      setFunction(Number(e.target.value));
    }
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
          onFocus={() => handleFocus(setUnitTests)}
          onBlur={(e) => handleBlur(e, setUnitTests, 60)}
        />
      </div>
      <div className="input-group">
        <label>Integration Test (£3 each):</label>
        <input
          type="number"
          value={integrationTests}
          onChange={(e) => setIntegrationTests(Number(e.target.value))}
          onFocus={() => handleFocus(setIntegrationTests)}
          onBlur={(e) => handleBlur(e, setIntegrationTests, 30)}
        />
      </div>
      <div className="input-group">
        <label>End-To-End Test (£5 each):</label>
        <input
          type="number"
          value={endToEndTests}
          onChange={(e) => setEndToEndTests(Number(e.target.value))}
          onFocus={() => handleFocus(setEndToEndTests)}
          onBlur={(e) => handleBlur(e, setEndToEndTests, 10)}
        />
      </div>
      <div className="input-group">
        <label>Accessibility Testing (£10 per screen):</label>
        <input
          type="number"
          value={accessibilityTests}
          onChange={(e) => setAccessibilityTests(Number(e.target.value))}
          onFocus={() => handleFocus(setAccessibilityTests)}
          onBlur={(e) => handleBlur(e, setAccessibilityTests, 10)}
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