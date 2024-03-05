import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Card from '../../components/card/card';

import './solutions.scss';

function Solutions() {
	return (
		<div className="solutions-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">
					Resilient websites. Fortified code bases. Trusted testing practices.
				</Typography>

				<Typography variant="subtitle1" className="subtitle">
					Whether it's to create your website from scratch or to 
					implement a CI/CD pipeline with custom tests, we are sure 
					that we can help. Take a look at the range of services our 
					professionals can help you with.
				</Typography>

				<section>
					<Typography variant="h2">Our Services</Typography>

					<div className="our-services-container tm-by3">
						<Grid container spacing={3}>
							<Grid item xs={12} md={4}>
								<Card>
									<Typography variant="h3">
										Frontend Development
									</Typography>

									<Typography variant="body1">
										Crafting beautiful and intuitive user interfaces.
									</Typography>

									<div className="tm-by2">
										<a href="/frontend">Learn more</a>
									</div>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card>
									<Typography variant="h3">
										Backend Development
									</Typography>

									<Typography variant="body1">
										Building robust and scalable server-side applications.
									</Typography>

									<div className="tm-by2">
										<a href="/backend">Learn more</a>
									</div>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card>
									<Typography variant="h3">
										Software Testing
									</Typography>

									<Typography variant="body1">
										Ensuring the quality and reliability of 
										your software products.
									</Typography>

									<div className="tm-by2">
										<a href="/software-testing">Learn more</a>
									</div>
								</Card>
							</Grid>
						</Grid>
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

export default Solutions;
