import React from 'react';
import { Typography, Button } from '@mui/material';
import Card from '../../components/card/card';

import './contact.scss';

function Contact() {
	return (
		<div className="contact-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">Contact</Typography>

				<Typography variant="subtitle1" className="subtitle">
					Need us? We are always a phone call away!
				</Typography>

				<section>
					<Typography variant="h2">Email Us</Typography>

					<div className="tm-by3">
						<a href="mailto:hire@nuclecode.uk">hire@nuclecode.uk</a>
					</div>
				</section>

				<section>
					<Typography variant="h2">Call Us</Typography>

					<div className="tm-by3">
						<a href="tel:+4407355573823">+44 (0) 7355 573 823</a>
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

export default Contact;