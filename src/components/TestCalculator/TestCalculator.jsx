import React, { useState } from 'react';
import './TestCalculator.scss';

const TestCalculator = () => {
  const [manualTests, setManualTests] = useState(0);
  const [unitTests, setUnitTests] = useState(0);
  const [integrationTests, setIntegrationTests] = useState(0);
  const [endToEndTests, setEndToEndTests] = useState(0);

  const calculateTotal = () => {
    return (manualTests * 1) + (unitTests * 1) + (integrationTests * 3) + (endToEndTests * 5);
  };

  return (
    <div className="calculator-container">
      <h3>Test Price Calculator</h3>
      <div className="input-group">
        <label>Manual Tests (£1 each):</label>
        <input
          type="number"
          value={manualTests}
          onChange={(e) => setManualTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Unit Tests (£1 each):</label>
        <input
          type="number"
          value={unitTests}
          onChange={(e) => setUnitTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>Integration Tests (£3 each):</label>
        <input
          type="number"
          value={integrationTests}
          onChange={(e) => setIntegrationTests(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <label>End-to-End Tests (£5 each):</label>
        <input
          type="number"
          value={endToEndTests}
          onChange={(e) => setEndToEndTests(Number(e.target.value))}
        />
      </div>
      <h4>Total Cost: £{calculateTotal()}</h4>
      <button className="calculate-btn">Place Order</button>
    </div>
  );
};

export default TestCalculator;



// import React, { useState } from 'react';

// const TestCalculator = () => {
//   const [manualTests, setManualTests] = useState(0);
//   const [unitTests, setUnitTests] = useState(0);
//   const [integrationTests, setIntegrationTests] = useState(0);
//   const [endToEndTests, setEndToEndTests] = useState(0);

//   const calculateTotal = () => {
//     return (manualTests * 1) + (unitTests * 1) + (integrationTests * 3) + (endToEndTests * 5);
//   };

//   return (
//     <div className="calculator-container">
//       <h3>Test Price Calculator</h3>
//       <label>
//         Manual Tests (£1 each):
//         <input
//           type="number"
//           value={manualTests}
//           onChange={(e) => setManualTests(e.target.value)}
//         />
//       </label>
//       <label>
//         Unit Tests (£1 each):
//         <input
//           type="number"
//           value={unitTests}
//           onChange={(e) => setUnitTests(e.target.value)}
//         />
//       </label>
//       <label>
//         Integration Tests (£3 each):
//         <input
//           type="number"
//           value={integrationTests}
//           onChange={(e) => setIntegrationTests(e.target.value)}
//         />
//       </label>
//       <label>
//         End-to-End Tests (£5 each):
//         <input
//           type="number"
//           value={endToEndTests}
//           onChange={(e) => setEndToEndTests(e.target.value)}
//         />
//       </label>
//       <h4>Total Cost: £{calculateTotal()}</h4>
//       <button onClick={() => alert('Order Confirmed!')}>Place Order</button>
//     </div>
//   );
// };

// export default TestCalculator;
