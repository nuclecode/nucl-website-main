import React, { useState } from 'react';
import './Syllabus.scss';
import syllabusData from './syllabusData.json';

const Syllabus = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="syllabus-container">
      <h2>{syllabusData.title}</h2>
      <p className="description">{syllabusData.description}</p>

      {syllabusData.sections.map((section, index) => (
        <div key={index} className="section">
          <h3 onClick={() => toggleSection(index)}>{section.title}</h3>
          {activeSection === index && (
            <p className="content">{section.content}</p>
          )}
        </div>
      ))}

      <a href={syllabusData.downloadLink} className="download-btn" download>
        Download Syllabus PDF
      </a>
    </div>
  );
};

export default Syllabus;
