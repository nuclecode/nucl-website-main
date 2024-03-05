import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import './footer.scss';
import { initializeApp } from "firebase/app";

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
						Freshest from the world of web and cybersecurity 
						straight to your inbox every Thursday.
					</Typography>

					<form onSubmit={submitHandler} noValidate className="form-container">
						<TextField label="Your Email" variant="outlined" value={emailInput} onChange={onEmailChange} />
						<Button type="submit">Sign me up</Button>
					</form>

					<Typography variant="caption">
						By signing up to nuclecode tech newsletter, 
						you agree to the &#160;
						<a href="/terms-and-conditions">terms and conditions</a>
					</Typography>
				</div>

				<div className="grid-container">
					<item>
						<div className="footer-section-title">
							Solutions
						</div>
						
						<ul className="hide-bullets">
							<li><a href="/frontend">Front End</a></li>
							<li><a href="/backend">Back End</a></li>
							<li><a href="/software-testing">Software Testing</a></li>
						</ul>
					</item>

					<item>
						<div className="footer-section-title">
							Company
						</div>

						<ul className="hide-bullets">
							<li><a href="/about">About</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</item>
				</div>

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
			</div>
		</div>
	);
}

export default Footer;