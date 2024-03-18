import React from 'react';
import Layout from '../../../layout/layout';
import { Typography } from '@mui/material';

import './frontend.scss';

function Frontend() {
	return (
		<Layout>
			<div className="frontend-solution-page-container page-top-space">
				<div className="container">
					<Typography variant="h1">Frontend Development</Typography>

					<page-section>
						<Typography variant="body1">
							Our frontend development team is dedicated
							to bringing your ideas to life with captivating
							user interfaces and engaging user experiences.
							Using the latest tools and technologies,
							we transform your design concepts into responsive, 
							interactive websites that captivate and convert 
							visitors into loyal customers.
						</Typography>
					</page-section>
				</div>
			</div>
		</Layout>
	);
}

export default Frontend;
