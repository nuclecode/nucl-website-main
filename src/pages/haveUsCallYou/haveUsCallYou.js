import React from 'react';
import Layout from '../../layout/layout';
import { Typography } from '@mui/material';
import ContactCustomersForm from '../../components/contactCustomersForm/contactCustomersForm';

import './haveUsCallYou.scss';

function HaveUsCallYou() {
	
	return (
		<Layout>
			<div className="have-us-call-you-container page-top-space">
				<div className="container">
					<Typography variant="h1">Have us call you</Typography>

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
							Let's talk. Fill in the phone number and a 
							nuclecode representative will contact you shortly.
						</Typography>
					</section>

					<ContactCustomersForm />
				</div>
			</div>
		</Layout>
	);
}

export default HaveUsCallYou;
