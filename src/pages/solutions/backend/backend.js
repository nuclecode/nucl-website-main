import React from 'react';
import Layout from '../../../layout/layout';
import { Typography } from '@mui/material';

import './backend.scss';

function Backend() {
	return (
		<Layout title="Back-End Development | nuclecode - Scalable and Secure Systems." description="Power your applications with nuclecode&apos;s robust back-end development solutions, ensuring scalability, security, and seamless performance for your business.">
			<div className="backend-solution-page-container page-top-space">
				<div className="container">
					<Typography variant="h1">Backend Development</Typography>

					<page-section>
						<Typography variant="body1">
							Behind every great website is a powerful backend
							infrastructure that drives performance and functionality.
							Our backend development experts are masters at architecting
							scalable, efficient systems that handle complex operations with
							ease. From database design to server-side scripting, we ensure
							that your website runs smoothly and securely, no matter the demands.
						</Typography>
					</page-section>
				</div>
			</div>
		</Layout>
	);
}

export default Backend;
