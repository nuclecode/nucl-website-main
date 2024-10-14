/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Layout from '../../layout/layout';
import { Typography, Button } from '@mui/material';
import SpiralImage from '../../assets/images/home-spiral.png';
import ReadyToStart from '../../components/readyToStart/readyToStart';
import OurServices from '../../components/ourServices/ourServices';
import AboutNuclecode from '../../components/aboutNuclecode/aboutNuclecode';
// import TestCalculator from "../../components/TestCalculator/TestCalculator"
// import OnePoundAdvert from '../../components/OnePoundAdvert/OnePoundAdvert';
import './home.scss';
import DemoHero from '../../components/demoHero/DemoHero';
import CarouselStack from "../../components/carouselStack/CarouselStack";
// import FormFooter from "../../components/formFooter/FormFooter";
import PrimaryForm from "../../components/primaryContactForm/PrimaryForm";
import ProcessSection from "../../components/processSection/ProcessSection";
// import Blog from "../blog/Blog";
import AnimatedChart from "../../components/chart/AnimatedChart";
import QuoteCalculator from "../../components/Quote/QuoteCalculator";
import Popup from "../../components/Popup/Popup";
import ExpoPack from "../../components/ExpoPack/ExpoPack";

function Home() {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const middleOfPage = window.innerHeight / 2 + window.scrollY;
			const pageHeight = document.documentElement.scrollHeight;

			// Trigger when user is around the middle of the page
			if (middleOfPage >= pageHeight / 2 && !showPopup) {
				setShowPopup(true);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [showPopup]); // Only reruns if showPopup changes

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	return (
		<Layout>
			<DemoHero />
			<CarouselStack />
			<div className="home-page-container page-top-space">
				<ExpoPack />
				<AnimatedChart />
				<page-section>
					<OurServices />
				</page-section>
				<QuoteCalculator />
				<div>
					<h1>Scroll Down to Trigger Popup</h1>
					<div style={{ height: '200vh', padding: '20px' }}>
						<p>Scroll halfway down the page to see the popup.</p>
					</div>

					{/* Popup with Matrix Animation */}
					<Popup isOpen={showPopup} onClose={handleClosePopup} />
				</div>
				<ProcessSection />
				<PrimaryForm />
			</div>
		</Layout>
	);
}

export default Home;
