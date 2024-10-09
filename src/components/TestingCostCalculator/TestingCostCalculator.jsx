import React, { useState } from 'react';
import styles from './TestingCalc.module.scss'; // Import the SCSS module

const TestingCostCalculator = () => {
  const [testCases, setTestCases] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(50); // Default hourly rate
  const [hoursPerTestCase, setHoursPerTestCase] = useState(1); // Default hours per test case
  const [totalCost, setTotalCost] = useState(0);

  // Function to calculate the total cost
  const calculateCost = () => {
    const cost = testCases * hourlyRate * hoursPerTestCase;
    setTotalCost(cost);
  };

  return (
      <div className={styles.container}>
        <h2 className={styles.title}>Testing Cost Calculator</h2>

        <div className={styles.inputGroup}>
          <label>Number of Test Cases:</label>
          <input
              type="number"
              value={testCases}
              onChange={(e) => setTestCases(e.target.value)}
              className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Hourly Rate (£):</label>
          <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Hours per Test Case:</label>
          <input
              type="number"
              value={hoursPerTestCase}
              onChange={(e) => setHoursPerTestCase(e.target.value)}
              className={styles.input}
          />
        </div>

        <button onClick={calculateCost} className={styles.button}>Calculate Cost</button>

        {totalCost > 0 && (
            <div className={styles.result}>
              <h3>Total Estimated Cost: £{totalCost.toFixed(2)}</h3>
            </div>
        )}
      </div>
  );
};

export default TestingCostCalculator;
