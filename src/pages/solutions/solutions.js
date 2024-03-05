import React from 'react';
import { Typography } from '@mui/material';
import ReadyToStart from '../../components/readyToStart/readyToStart';
import OurServices from '../../components/ourServices/ourServices';

import './solutions.scss';

function Solutions() {
	return (
		<div className="solutions-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">
					Resilient websites. Fortified code bases. Trusted testing practices.
				</Typography>

				<pageSection>
					<Typography variant="subtitle1" className="subtitle">
						Whether it's to create your website from scratch or to 
						implement a CI/CD pipeline with custom tests, we are sure 
						that we can help. Take a look at the range of services our 
						professionals can help you with.
					</Typography>
				</pageSection>

				<pageSection>
					<OurServices />
				</pageSection>

				<pageSection>
					<ReadyToStart />
				</pageSection>
			</div>
		</div>
	);
}

export default Solutions;
