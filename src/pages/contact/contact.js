import React from 'react';
import { Typography, Button } from '@mui/material';
import ReadyToStart from '../../components/readyToStart/readyToStart';

import './contact.scss';

function Contact() {
	return (
		<div className="contact-page-container page-top-space">
			<div className="container relative">
				<Typography variant="h1">Contact</Typography>

				<pageSection>
					<Typography variant="subtitle1" className="subtitle">
						Need us? We are always a phone call away!
					</Typography>
				</pageSection>

				<pageSection>
					<Typography variant="h2">Email Us</Typography>

					<div className="tm-by1">
						<a href="mailto:hire@nuclecode.uk">hire@nuclecode.uk</a>
					</div>
				</pageSection>

				<pageSection>
					<Typography variant="h2">Call Us</Typography>

					<div className="tm-by1">
						<a href="tel:+4407355573823">+44 (0) 7355 573 823</a>
					</div>
				</pageSection>

				<pageSection>
					<ReadyToStart />
				</pageSection>
			</div>
		</div>
	);
}

export default Contact;