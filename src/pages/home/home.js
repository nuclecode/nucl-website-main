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
						Get a secure and tested website to prolong the lifespan of your codebase.
						With the latest industry best practices and decades of developing experience,
						we deliver the results you come for.<br />
						Interested? Let's schedule a video call!
					</Typography>
				</pageSection>

				<pageSection className="book-a-chat-button-container">
					<a href="/schedule-a-call">
						<Button className="book-a-chat-button">Book a Zoom call</Button>
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