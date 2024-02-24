import React from 'react';

function EnquiryForm() {
  // Add your form logic here
  return (
    <div>
      {/* Add your enquiry form JSX here */}
      <h2>Schedule a call with a Project Manager</h2>
      <div className="calendly-inline-widget" data-url="https://calendly.com/nuclecode?primary_color=ffa1a1" style={{ minWidth: '320px', height: '700px' }} />
    </div>
  );
}

export default EnquiryForm;
