import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Card from '../../components/card/card';
import SpiralImage from '../../assets/images/home-spiral.png';

import './home.scss';

function Home () {
    return (
		<div className="home-page-container page-top-space">
			<div className="container relative">
				<img src={SpiralImage} className="spiral-image" alt="spiral" />

				<Typography variant="h1">The future of your website secured</Typography>
					
				<Typography variant="subtitle1" className="subtitle">
					Get secure and tested code to make your website less prone to exploits, 
					with long-lasting effects
				</Typography>

				<div className="book-a-chat-button-container">
					<a href="/schedule-a-call">
						<Button className="book-a-chat-button">Book a Chat</Button>
					</a>
				</div>


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
					<Typography variant="h2">About Nuclecode</Typography>

					<div className="tm-by3">
						<Card>
							<Typography variant="body1">
								Learn more about our company and our mission to help 
								businesses succeed.
							</Typography>

							<div className="tm-by2">
								<a href="/about">Learn more</a>
							</div>
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


export default Home;