import React from 'react';
import { Typography } from '@mui/material';

import './testing.scss';

function Testing() {
	return (
		<div className="testing-solution-page-container page-top-space">
			<div className="container">
				<Typography variant="h1">Software Testing</Typography>

				<pageSection>
					<Typography variant="body1">
						Ensure the quality and reliability of your software 
						with our comprehensive testing services.
					</Typography>
				</pageSection>

				<ul>
					<li>Android and iOS Testing</li>
					<li>Website/PWA Testing</li>
					<li>React App Testing</li>
				</ul>
			</div>
		</div>
	);
}

export default Testing;
