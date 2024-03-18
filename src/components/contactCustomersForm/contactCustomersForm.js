import React, {useState, useEffect}  from 'react';
import PhoneInput from 'react-phone-input-2';
import { Button, Typography, Snackbar, Alert } from '@mui/material';
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
		<div className="contact-customers-form-container">
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
	);
}

export default ContactCustomersForm;
