import React, {useState} from 'react';
import { Button, Typography, TextField } from '@mui/material';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import './footer.scss';


function Footer() {
	const currentYear = new Date().getFullYear();
	const [emailInput, setEmailInput] = useState("");

	const onEmailChange = (e) => {
		setEmailInput(e.target.value);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		await addDoc(collection(db, 'newsletter-emails'), {
			email: emailInput,
			timestamp: serverTimestamp()
		}).then(() => {
			setEmailInput("");
		}).catch((error) => {
			console.error("failed db ", error);
		});
	};

	return (
		<div className="footer-container">
			<div className="container">
				<div className="newsletter-container">
					<Typography variant="subtitle1" className="newsletter-subtitle">
						Subscribe to our tech newsletter
					</Typography>
					<Typography variant="caption">
						Freshest from the world of web and cybersecurity straight to your inbox every Thursday.
					</Typography>
					<form onSubmit={submitHandler} noValidate className="form-container">
						<TextField label="Your Email" variant="outlined" value={emailInput} onChange={onEmailChange} />
						<Button type="submit">Sign me up</Button>
					</form>
					<Typography variant="overline">
						*by signing up to nuclecode tech newsletter, you agree to the&nbsp;
						<a href="/terms-and-conditions">terms and conditions</a>
					</Typography>
				</div>

				<Typography variant="overline" className="grid-container">
					<div className="item">
						<div className="footer-section-title">Solutions</div>
						<ul className="hide-bullets">
							<li><a href="/solutions/frontend">Front End</a></li>
							<li><a href="/solutions/backend">Back End</a></li>
							<li><a href="/solutions/testing">Software Testing</a></li>
							<li><a href="/resources">Resources</a></li>
						</ul>
					</div>
					<div className="item">
						<div className="footer-section-title">Company</div>
						<ul className="hide-bullets">
							<li><a href="/about">About</a></li>
							<li><a href="/contact">Contact</a></li>
							<li><a href="/terms-and-conditions">Terms and Conditions</a></li>
						</ul>
					</div>
				</Typography>

				<div className="social-media-container">
					&copy; nuclecode {currentYear}
					<div className="social-media">
						<a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noreferrer">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://www.facebook.com/nuclecode/" target="_blank" rel="noreferrer">
							<i className="fab fa-facebook"></i>
						</a>
					</div>
				</div>

				<div className="partner-badge">
					<a href="https://partnernetwork.ionos.co.uk/partner/nuclecode?origin=PartnerBadge" rel="nofollow">
						<img
							src="https://images-2.partnerportal.ionos.co.uk/items/e840c9b0-26ae-416d-a5a9-a48c0413eb81/profiles/ba997a4b-7dee-4d7d-984a-7f8f9bc3f992/badges/normal_white_eco"
							alt="IONOS - Official Partner"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}


export default Footer;
