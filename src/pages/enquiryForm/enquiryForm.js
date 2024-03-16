import React, { useEffect }  from 'react';
import { Typography } from '@mui/material';

import './enquiryForm.scss';

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
		<div className="enquiry-form-container page-top-space">
			<div className="container">
				<Typography variant="h1">Book a call</Typography>

				<div 
					className="calendly-inline-widget" 
					data-url="https://calendly.com/nuclecode?primary_color=ff00b6"></div>
			</div>
		</div>
	);
}

export default EnquiryForm;