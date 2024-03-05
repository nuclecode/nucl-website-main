import React from 'react';
import { Typography } from '@mui/material';

import './backend.scss';

function Backend() {
	return (
		<div className="backend-solution-page-container page-top-space">
			<div className="container">
				<Typography variant="h1">Backend Development</Typography>

				<pageSection>
					<Typography variant="body1">
						Behind every great website is a powerful backend
						infrastructure that drives performance and functionality.
						Our backend development experts are masters at architecting
						scalable, efficient systems that handle complex operations with
						ease. From database design to server-side scripting, we ensure
						that your website runs smoothly and securely, no matter the demands.
					</Typography>
				</pageSection>
			</div>
		</div>
	);
}

export default Backend;
