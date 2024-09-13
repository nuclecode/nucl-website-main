import React from 'react';
import Layout from '../../layout/layout';
import { Typography, Button } from '@mui/material';
import SpiralImage from '../../assets/images/home-spiral.png';
import ReadyToStart from '../../components/readyToStart/readyToStart';
import OurServices from '../../components/ourServices/ourServices';
import AboutNuclecode from '../../components/aboutNuclecode/aboutNuclecode';
import HeroSection from "../../components/Herosection/HeroSection";
import TestCalculator from "../../components/TestCalculator/TestCalculator"
import OnePoundAdv from '../../components/OnePoundAdv/OnePoundAdv';
import './home.scss';

function Home() {
	return (
		<Layout>
			<HeroSection />
			<div className="home-page-container page-top-space">

				<div className="container relative">
					<img src={SpiralImage} className="spiral-image" alt="spiral" />

					<Typography variant="h1">
						Privacy-focused web development optimized for your business.
					</Typography>

					<page-section>
						<Typography variant="subtitle1" className="subtitle">
							Security is a priority. Get a secure and tested website to prolong the lifespan of your codebase.
							With the latest industry best practices and decades of developing experience,
							we deliver the results you come for.<br />
							Interested? Book a video call now.
						</Typography>
					</page-section>

					<page-section className="book-a-call-button-container">
						<a href="/schedule-a-call">
							<Button className="book-a-call-button">Book a call</Button>
						</a>
					</page-section>

				<div className="home-page-adv-container">
					
						<OnePoundAdv />
						<TestCalculator />
					
				</div>

					<page-section>
						<OurServices />
					</page-section>

					<page-section>
						<AboutNuclecode />
					</page-section>

					<page-section>
						<ReadyToStart />
					</page-section>
				</div>
			</div>
			
		</Layout>
	);
}


export default Home;
