import React, { useEffect }  from 'react';

function EnquiryForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget" data-url="https://calendly.com/nuclecode?primary_color=ff00b6" style={{ minWidth: '320px', height: '700px' }}></div>
  );
}
  // return (
    
    // <div>
    //   {/* Add your enquiry form JSX here */}
    //   <h2>Schedule a call with a Project Manager</h2>
    //   <div className="calendly-inline-widget" data-url="https://calendly.com/nuclecode?primary_color=ffa1a1" style={{ minWidth: '320px', height: '700px' }} />
    // </div>
//   );
// }

export default EnquiryForm;
