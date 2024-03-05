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
						Our backend solutions are scalable, efficient, 
						and tailored to your business needs.
					</Typography>
				</pageSection>
			</div>
		</div>
	);
}

export default Backend;
