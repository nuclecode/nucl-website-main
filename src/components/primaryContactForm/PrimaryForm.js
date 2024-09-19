import React, { useState } from 'react';
import { Button, Typography, Snackbar, Alert } from '@mui/material';
import { db } from '../../firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import styles from './PrimaryForm.module.scss';

const FullViewportForm = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [showAlert, setShowAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        setShowAlert(false);
        setShowErrorAlert(false);

        let isValid = true;

        if (!name || !company || !email || !phone) {
            setShowErrorAlert(true);
            isValid = false;
        }

        if (isValid) {
            try {
                await addDoc(collection(db, 'primaryform'), {
                    name,
                    company,
                    email,
                    phone,
                    timestamp: serverTimestamp()
                });
                setName('');
                setCompany('');
                setEmail('');
                setPhone('');
                setShowAlert(true);
            } catch (error) {
                console.error("Failed to submit form: ", error);
                setShowErrorAlert(true);
            }
        }
    };

    return (
        <div className={styles.PrimaryFormContainer}>
            {showErrorAlert && (
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={true}
                    autoHideDuration={5000}>
                    <Alert severity="error" variant="filled">
                        Sorry, there was an error submitting your request. Please try again later.
                    </Alert>
                </Snackbar>
            )}

            {showAlert && (
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={true}
                    autoHideDuration={5000}>
                    <Alert severity="success" variant="filled">
                        Thank you! Your information has been successfully submitted!
                    </Alert>
                </Snackbar>
            )}

            <div className={styles.ctaText}>
                <h1>Let's engineer great stuff together.</h1>
                <p>Our expertise can help you capitalize on new possibilities. Share your details, and we’ll explore how we can create impact together.</p>
            </div>

            <div className={styles.formWrapper}>
                <form onSubmit={submitHandler} noValidate>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                    <Button type="submit" variant="contained" color="primary">
                        Let's Chat!
                    </Button>

                    <div className={styles.termsConditions}>
                        <Typography variant="overline">
                            *By providing your information, you agree to the{' '}
                            <a href="/terms-and-conditions">terms and conditions</a>
                        </Typography>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FullViewportForm;
