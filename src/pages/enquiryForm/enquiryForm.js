import React, { useEffect }  from 'react';
import Layout from '../../layout/layout';
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
		<Layout>
			<div className="enquiry-form-container page-top-space">
				<div className="container">
					<Typography variant="h1">Book a call</Typography>

					<section>
						<Typography variant="h3">
							Your business could sell online and make more profit
						</Typography>
					</section>

					<section>
						<Typography variant="body1">
							Did you know that you could have sold twice as many 
							products as you did today if you were selling via your 
							own website?
						</Typography>
					</section>

					<section>
						<Typography variant="body1">
							What if you could avoid paying the commissions on delivery, 
							service charges and much more to own your website?
						</Typography>
					</section>

					<section>
						<Typography variant="body1">
							Let's talk. Book a FREE consultation with 
							nuclecode professionals now.
						</Typography>
					</section>

					<div 
						className="calendly-inline-widget" 
						data-url="https://calendly.com/nuclecode?primary_color=ff00b6"></div>
				</div>
			</div>
		</Layout>
	);
}

export default EnquiryForm;
