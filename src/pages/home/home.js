import React from 'react';
import { Typography, Button } from '@mui/material';
import SpiralImage from '../../assets/images/home-spiral.png';
import ReadyToStart from '../../components/readyToStart/readyToStart';
import OurServices from '../../components/ourServices/ourServices';
import AboutNuclecode from '../../components/aboutNuclecode/aboutNuclecode';

import './home.scss';

function Home () {
    return (
		<div className="home-page-container page-top-space">
			<div className="container relative">
				<img src={SpiralImage} className="spiral-image" alt="spiral" />

				<Typography variant="h1">
					The future of your website secured
				</Typography>
				
				<pageSection>
					<Typography variant="subtitle1" className="subtitle">
						Get secure and tested code to make your website less prone to exploits, 
						with long-lasting effects
					</Typography>
				</pageSection>

				<pageSection className="book-a-chat-button-container">
					<a href="/schedule-a-call">
						<Button className="book-a-chat-button">Book a Chat</Button>
					</a>
				</pageSection>

				<pageSection>
					<OurServices />
				</pageSection>

				<pageSection>
					<AboutNuclecode />
				</pageSection>

				<pageSection>
					<ReadyToStart />
				</pageSection>
			</div>
		</div>
    );
}


export default Home;