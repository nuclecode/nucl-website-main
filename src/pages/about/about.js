import React from 'react';
import { Typography } from '@mui/material';
import Card from '../../components/card/card';
import ReadyToStart from '../../components/readyToStart/readyToStart';

import './about.scss';

function About () {
    return (
		<div className="about-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">About Us</Typography>

				<pageSection>
					<Typography variant="subtitle1" className="subtitle">
						add text about us
					</Typography>
				</pageSection>

				<pageSection>
					<Typography variant="h2">Our Mission</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								We are on a mission of delivering secure, 
								scalable, and easy-to-maintain code.
							</Typography>
						</Card>
					</div>
				</pageSection>

				<pageSection>
					<Typography variant="h2">Our Team</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								We are a team of professionals who dedicate 
								their careers to deliver great software that would last.
							</Typography>
						</Card>
					</div>
				</pageSection>

				<pageSection>
					<Typography variant="h2">Our History</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								Learn more about our company's journey:
							</Typography>
						</Card>
					</div>
				</pageSection>

				<pageSection>
					<ReadyToStart />
				</pageSection>
			</div>
		</div>
    );
}

export default About;