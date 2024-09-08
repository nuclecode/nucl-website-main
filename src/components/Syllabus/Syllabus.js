import React, { useState } from 'react';
import './Syllabus.scss';
import syllabusData from './syllabusData.json';
import ChevronIcon from '../ChevronIcon/ChevronIcon'

const Syllabus = () => {
  const [activeSection, setActiveSection] = useState([]);
  const [activeSubSection, setActiveSubSection] = useState({});
  const [activeSubSubSection, setActiveSubSubSection] = useState({});

  const toggleSection = (index) => {
    setActiveSection((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSubSection = (sectionIndex, subIndex) => {
    setActiveSubSection((prevState) => ({
      ...prevState,
      [sectionIndex]: prevState[sectionIndex]?.includes(subIndex)
        ? prevState[sectionIndex].filter((i) => i !== subIndex)
        : [...(prevState[sectionIndex] || []), subIndex],
    }));
  };

  const toggleSubSubSection = (sectionIndex, subIndex, subSubIndex) => {
    setActiveSubSubSection((prevState) => ({
      ...prevState,
      [`${sectionIndex}-${subIndex}`]: prevState[`${sectionIndex}-${subIndex}`]?.includes(subSubIndex)
        ? prevState[`${sectionIndex}-${subIndex}`].filter((i) => i !== subSubIndex)
        : [...(prevState[`${sectionIndex}-${subIndex}`] || []), subSubIndex],
    }));
  };

  const handleKeyPress = (event, toggleFunc, ...args) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); 
      toggleFunc(...args);
    }
  };

  const expandAll = () => {
    const isAllExpanded = activeSection.length === syllabusData.sections.length;
  
    if (isAllExpanded) {
      
      setActiveSection([]);
      setActiveSubSection({});
      setActiveSubSubSection({});
    } else {
      
      setActiveSection(syllabusData.sections.map((_, index) => index));
  
      
      setActiveSubSection(
        syllabusData.sections.reduce((acc, section, sectionIndex) => {
          if (section.subsections && section.subsections.length > 0) {
            acc[sectionIndex] = section.subsections.map((_, subIndex) => subIndex);
          }
          return acc;
        }, {})
      );
  
      
      setActiveSubSubSection(
        syllabusData.sections.reduce((acc, section, sectionIndex) => {
          if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach((subsection, subIndex) => {
              if (subsection.subsections && subsection.subsections.length > 0) {
                acc[`${sectionIndex}-${subIndex}`] = subsection.subsections.map((_, subSubIndex) => subSubIndex);
              }
            });
          }
          return acc;
        }, {})
      );
    }
  };

  return (
    <div className="syllabus-container">
      <h2>{syllabusData.title}</h2>
      <p className="description">{syllabusData.description}</p>

    {syllabusData.syllabus.map((item, index) => (
        <div key={index} className="syllabus-intro">
        <h3>{item.title}</h3>
        <p className="syllabus-description">{item.description}</p>
        </div>
    ))}

      <button
        className="expand-btn"
        onClick={expandAll}
        onKeyDown={(event) => handleKeyPress(event, expandAll)}
        tabIndex="0"
      >
        {activeSection.length === syllabusData.sections.length ? 'Collapse All' : 'Expand All'}
      </button>

      {syllabusData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="section">
          <div
            className="section-header"
            onClick={() => toggleSection(sectionIndex)}
            onKeyDown={(event) => handleKeyPress(event, toggleSection, sectionIndex)}
            role="button"
            aria-expanded={activeSection.includes(sectionIndex)}
            aria-controls={`section-content-${sectionIndex}`}
            tabIndex="0"
          >
            <h3>{section.title}</h3>
            <ChevronIcon
              className={`chevron ${activeSection.includes(sectionIndex) ? 'expanded' : ''}`}
            />
          </div>

          {activeSection.includes(sectionIndex) && (
            <div
              id={`section-content-${sectionIndex}`}
              className="section-content"
              role="region"
            >
              {Array.isArray(section.content) ? (
                section.content.map((paragraph, i) => (
                  <p key={i} className="paragraph">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="paragraph">{section.content}</p>
              )}

              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="subsection">
                    <div
                      className="subsection-header"
                      onClick={() => toggleSubSection(sectionIndex, subIndex)}
                      onKeyDown={(event) => handleKeyPress(event, toggleSubSection, sectionIndex, subIndex)}
                      role="button"
                      aria-expanded={activeSubSection[sectionIndex]?.includes(subIndex)}
                      aria-controls={`subsection-content-${sectionIndex}-${subIndex}`}
                      tabIndex="0"
                    >
                      <h4 className="subsection-title">{subsection.title}</h4>
                      <ChevronIcon
                        className={`chevron ${activeSubSection[sectionIndex]?.includes(subIndex) ? 'expanded' : ''}`}
                      />
                    </div>

                    {activeSubSection[sectionIndex]?.includes(subIndex) && (
                      <div
                        id={`subsection-content-${sectionIndex}-${subIndex}`}
                        className="subsection-content"
                        role="region"
                      >
                        {Array.isArray(subsection.content) ? (
                          subsection.content.map((subParagraph, subI) => (
                            <p key={subI} className="paragraph">
                              {subParagraph}
                            </p>
                          ))
                        ) : (
                          <p className="paragraph">{subsection.content}</p>
                        )}

                        {subsection.subsections &&
                          subsection.subsections.map((subSubSection, subSubIndex) => (
                            <div key={subSubIndex} className="sub-subsection">
                              <div
                                className="sub-subsection-header"
                                onClick={() => toggleSubSubSection(sectionIndex, subIndex, subSubIndex)}
                                onKeyDown={(event) => handleKeyPress(event, toggleSubSubSection, sectionIndex, subIndex, subSubIndex)}
                                role="button"
                                aria-expanded={activeSubSubSection[`${sectionIndex}-${subIndex}`]?.includes(subSubIndex)}
                                aria-controls={`sub-subsection-content-${sectionIndex}-${subIndex}-${subSubIndex}`}
                                tabIndex="0"
                              >
                                <h5 className="sub-subsection-title">{subSubSection.title}</h5>
                                <ChevronIcon
                                  className={`chevron ${
                                    activeSubSubSection[`${sectionIndex}-${subIndex}`]?.includes(subSubIndex)
                                      ? 'expanded'
                                      : ''
                                  }`}
                                />
                              </div>

                              {activeSubSubSection[`${sectionIndex}-${subIndex}`]?.includes(subSubIndex) && (
                                <div
                                  id={`sub-subsection-content-${sectionIndex}-${subIndex}-${subSubIndex}`}
                                  className="sub-subsection-content"
                                  role="region"
                                >
                                    {Array.isArray(subSubSection.content) ? (
                                        subSubSection.content.map((subSubParagraph, subSubI) => (
                                            <p key={subSubI} className="paragraph">
                                                {subSubParagraph}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="paragraph">{subSubSection.content}</p>      
                                    )}
                                  </div>
                              )}
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                ))}
                
            </div>
          )}
          </div>
      ))}
    </div>
  );
};

export default Syllabus;
