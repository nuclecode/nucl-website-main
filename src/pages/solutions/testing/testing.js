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
								Quality is paramount in everything we do,
								which is why we offer comprehensive software
								testing services to ensure that your website
								performs flawlessly in every scenario. Our team
								employs rigorous testing methodologies to identify 
								and address any issues before they impact your users,
								delivering a polished product that exceeds expectations.
					</Typography>
				</pageSection>
{/* 
				<ul>
					<li>Android and iOS Testing</li>
					<li>Website/PWA Testing</li>
					<li>React App Testing</li>
				</ul> */}
			</div>
		</div>
	);
}

export default Testing;
