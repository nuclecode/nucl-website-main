import React from 'react';
import { Typography, Button } from '@mui/material';
import Card from '../../components/card/card';

import './about.scss';

function About () {
    return (
		<div className="about-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">About Us</Typography>

				<Typography variant="subtitle1" className="subtitle">
					add text about us
				</Typography>

				<section>
					<Typography variant="h2">Our Mission</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								We are on a mission of delivering secure, 
								scalable, and easy-to-maintain code.
							</Typography>
						</Card>
					</div>
				</section>

				<section>
					<Typography variant="h2">Our Team</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								We are a team of professionals who dedicate 
								their careers to deliver great software that would last.
							</Typography>
						</Card>
					</div>
				</section>

				<section>
					<Typography variant="h2">Our History</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								Learn more about our company's journey:
							</Typography>
						</Card>
					</div>
				</section>

				<section>
					<Typography variant="h2">Ready to start a project?</Typography>

					<div className="ready-to-start-container tm-by3">
						<Card>
							<Typography variant="body1">
								Have a project in mind or need help with an existing one?
							</Typography>

							<div className="tm-by2">
								<a href="/schedule-a-call">
									<Button className="book-a-chat-button">Book a Chat</Button>
								</a>
							</div>
						</Card>
					</div>
				</section>
			</div>
		</div>
    );
}

export default About;