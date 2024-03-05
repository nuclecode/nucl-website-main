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
						Our frontend development team is dedicated
						to bringing your ideas to life with captivating
						user interfaces and engaging user experiences.
						Using the latest tools and technologies,
						we transform your design concepts into responsive, 
						interactive websites that captivate and convert 
						visitors into loyal customers.
					</Typography>
				</pageSection>
			</div>
		</div>
	);
}

export default Frontend;
