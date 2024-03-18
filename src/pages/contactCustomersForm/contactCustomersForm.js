import React, {useState, useEffect}  from 'react';
import Layout from '../../layout/layout';
import PhoneInput from 'react-phone-input-2';
import { Button, Typography, TextField, Snackbar, Alert } from '@mui/material';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import 'react-phone-input-2/lib/style.css';
import './contactCustomersForm.scss';

function ContactCustomersForm() {
	const [phoneInput, setPhoneInput] = useState("");
	const [displayPhoneError, setDisplayPhoneError] = useState(false);
	const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

	const [displaySuccessIcon, setDisplaySuccessIcon] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [showErrorAlert, setShowErrorAlert] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();

		setDisplayPhoneError(false);
		setDisplaySuccessIcon(false);
		setShowAlert(false);
		setShowErrorAlert(false);

		let isValid = true;

		//validate form
		if (!phoneInput) {
			setDisplayPhoneError(true);
			isValid = false;
			setPhoneErrorMessage("Please enter your phone number");
		}
		else {
			// let regex = /\S+@\S+\.\S+/;
			// if (regex.test(emailInput) === false) {
			// 	setDisplayEmailError(true);
			// 	isValid = false;
			// 	setEmailErrorMessage("Please enter valid email address");
			// }
		}

		if (isValid) {
			await addDoc(collection(db, 'callback'), {
				phone: phoneInput,
				timestamp: serverTimestamp()
			}).then(() => {
				setPhoneInput("");

				//success confirmation
				setDisplaySuccessIcon(true);
				setShowAlert(true);
			}).catch((error) => {
				console.error("failed db ", error);
				setShowErrorAlert(true);
			});
		}
	};

	useEffect(() => {
		if (showAlert) {
			const time = setTimeout(() => {
				setShowAlert(false);
			}, 5000);

			return () => {
				clearTimeout(time);
			}
		}
	}, [showAlert]);

	return (
		<Layout>
			<div className="contact-customers-form-container page-top-space">
				<div className="container">
					{showErrorAlert && (
						<Snackbar
							anchorOrigin={{vertical: 'top', horizontal: 'center'}}
							open={true}
							autoHideDuration={5000}>
							<Alert severity="error" variant="filled">
								Sorry, there was an error submitting your request. 
								Please try again later.
							</Alert>
						</Snackbar>
					)}

					{showAlert && (
						<Snackbar
							anchorOrigin={{vertical: 'top', horizontal: 'center'}}
							open={true}
							autoHideDuration={5000}>
							<Alert severity="success" variant="filled">
								Thank you, your phone number has been successfully submitted!
							</Alert>
						</Snackbar>
					)}

					<Typography variant="h1">Have us call you</Typography>

					<section>
						<Typography variant="h3">
							Your business could sell online and make more profit
						</Typography>
					</section>

					<section>
						<Typography variant="body1">
							Did you know that you could have sold twice as many 
							products as you did today if you were selling via your 
							own website?
						</Typography>
					</section>

					<section>
						<Typography variant="body1">
							What if you could avoid paying the commissions on delivery, 
							service charges and much more to own your website?
						</Typography>
					</section>

					<section> 
						<Typography variant="body1">
							Let's talk. Fill in the phone number and a 
							nuclecode representative will contact you shortly.
						</Typography>
					</section>

					<form onSubmit={submitHandler} noValidate className="form-container">
						<div>
							<PhoneInput
								country="gb"
								value={phoneInput}
								onChange={setPhoneInput}
								placeholder="Your Phone Number"
								className="phone-number-field"
								dropdownClass="hide-bullets"
							/>

							{displayPhoneError && (
								<div className="inline-error">
									{phoneErrorMessage}
								</div>
							)}
						</div>

						<div className="button-container">
							<Button type="submit" className="call-me-button">Call me</Button>

							{displaySuccessIcon && (
								<div className="successfully-submitted-container">
									<i className="fa-regular fa-thumbs-up"></i> 
									Your phone number has been successfully submitted!
								</div>
							)}
						</div>
					</form>

					<div className="note">
						<Typography variant="overline">
							*by providing your phone number you agree to the &#160;
							<a href="/terms-and-conditions">terms and conditions</a>
						</Typography>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default ContactCustomersForm;
