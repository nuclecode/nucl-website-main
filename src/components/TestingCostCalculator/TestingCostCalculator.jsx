import React, { useState } from 'react';

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
    <div style={styles.container}>
      <h2>Testing Cost Calculator</h2>

      <div style={styles.inputGroup}>
        <label>Number of Test Cases:</label>
        <input
          type="number"
          value={testCases}
          onChange={(e) => setTestCases(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Hourly Rate (£):</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Hours per Test Case:</label>
        <input
          type="number"
          value={hoursPerTestCase}
          onChange={(e) => setHoursPerTestCase(e.target.value)}
          style={styles.input}
        />
      </div>

      <button onClick={calculateCost} style={styles.button}>Calculate Cost</button>

      {totalCost > 0 && (
        <div style={styles.result}>
          <h3>Total Estimated Cost: £{totalCost.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
  },
};

export default TestingCostCalculator;
