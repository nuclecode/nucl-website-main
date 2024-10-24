import React from 'react';
import Layout from '../../layout/layout';
import { Typography } from '@mui/material';
import ReadyToStart from '../../components/readyToStart/readyToStart';
import ContactCustomersForm from '../../components/contactCustomersForm/contactCustomersForm';

import './contact.scss';

function Contact() {
	return (
		<Layout title="Contact Us | nuclecode - Get in Touch with Our Web Experts." description="Contact nuclecode today to discuss your web development needs, schedule a consultation, or get a quote for your next project.">
			<div className="contact-page-container page-top-space">
				<div className="container relative">
					<Typography variant="h1">Contact</Typography>

					<page-section>
						<Typography variant="subtitle1" className="subtitle">
							How can we help you today?
						</Typography>
					</page-section>

					<page-section>
						<Typography variant="h2">Email Us</Typography>

						<div className="tm-by1">
							<a href="mailto:hire@nuclecode.uk">hire@nuclecode.uk</a>
						</div>
					</page-section>

					<page-section>
						<Typography variant="h2">Call Us</Typography>

						<div className="tm-by1">
							<a href="tel:+4407355573823">+44 (0) 7355 573 823</a>
						</div>
					</page-section>

					<page-section>
						<Typography variant="h2">Have us call you</Typography>

						<div className="tm-by1">
							<ContactCustomersForm />
						</div>
					</page-section>

					<page-section>
						<ReadyToStart />
					</page-section>
				</div>
			</div>
		</Layout>
	);
}

export default Contact;