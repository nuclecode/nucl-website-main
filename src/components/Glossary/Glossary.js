import React, { useState, useEffect } from 'react';
import './Glossary.scss';
import glossaryData from './glossaryData';
import { Typography } from '@mui/material';

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [glowActive, setGlowActive] = useState(true);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleGlow = () => {
    setGlowActive(!glowActive);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % glossaryData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredData = glossaryData.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glossary-container">
      <Typography variant="h2">ISTQB Testing Glossary</Typography>
      
      <div className="search-container">
        <button className="toggle-button" onClick={toggleGlow}>
          {glowActive ? 'Turn Off Glow' : 'Turn On Glow'}
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">🔍</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody id="myTable">
            {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <tr key={item.id} className={glowActive && highlightIndex === index ? 'glow' : ''}>
            <td>
                <Typography variant="body1">
                    {item.id}
                </Typography>
            </td>
            <td>
                <Typography variant="body1">
                    {item.term}
                </Typography>            
            </td>
            <td>
                <Typography variant="body1">
                    {item.definition}
                </Typography>
            </td>
            </tr>
          ))
        ) : (
            <tr>
            <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                <Typography variant="body1">
              No results found
              </Typography>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

export default Glossary;