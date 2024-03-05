import React from 'react';
import { Typography } from '@mui/material';

import './frontend.scss';

function Frontend() {
	return (
		<div className="frontend-solution-page-container page-top-space">
			<div className="container">
				<Typography variant="h1">Frontend Development</Typography>

				<pageSection>
					<Typography variant="body1">
						We specialize in creating engaging and user-friendly 
						frontend interfaces.
					</Typography>
				</pageSection>
			</div>
		</div>
	);
}

export default Frontend;
