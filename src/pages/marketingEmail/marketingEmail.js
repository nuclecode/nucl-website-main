import React from 'react';
import Layout from '../../layout/layout';
import { HeaderType, FooterType } from '../../libs/enums';
import { ReactComponent as LogoImage } from '../../assets/svg/logo-website.svg';
import { Typography, Grid, Button } from '@mui/material';
import SpiralImage from '../../assets/images/home-spiral.png';

import './marketingEmail.scss';

function MarketingEmail() {
	
	return (
		<Layout header={HeaderType.None} footer={FooterType.None}>
			<div className="sell-online-container">
				<div className="container">
					<div className="logo-container">
						<a href="/">
							<LogoImage />
						</a>
					</div>

					<Typography variant="h1">
						Your business could sell online and make more profit
					</Typography>

					<Grid container>
						<Grid item xs={1} md={2}>&#160;</Grid>
						<Grid item xs={10} md={8}>
							<section className="tm-by3">
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
									Convinced? Let's talk about your own business website.
								</Typography>
							</section>

							<section>
								<Typography variant="body1">
									<div>
										Book a FREE consultation with nuclecode professionals now.
									</div>
									<div>
										OR, if you prefer, we can call you.
									</div>
								</Typography>
							</section>

							<section className="book-a-call-container">
								<div className="buttons-container">
									<a href="/schedule-a-call">
										<Button className="book-a-call-button">Book a call</Button>
									</a>

									<a href="/have-us-call-you">
										<Button className="book-a-call-button">Have us call you</Button>
									</a>
								</div>

								<Typography variant="overline" className="note">
									*by proceeding, you are not charged nor bound by any contract
								</Typography>
							</section>

							
							<div className="about-section-container">
								<section>
									<Typography variant="h2">About nuclecode</Typography>
								</section>

								<section>
									<Typography variant="body1">
										nuclecode web experts specialize in crafting bespoke 
										web solutions tailored to the unique needs and vision 
										of your business.
									</Typography>
								</section>

								<section>
									<a href="/">
										<Button variant="outlined">Learn about nuclecode</Button>
									</a>
								</section>

								<section className="tm-by5">
									<img src={SpiralImage} className="spiral-image" alt="spiral" />
								</section>
							</div>

							<div className="social-media-container">
								<div className="social-media">
									<a href="https://www.linkedin.com/company/nuclecode/" target="_blank" rel="noreferrer">
										<i className="fab fa-linkedin"></i>
									</a>
									<a href="https://www.facebook.com/nuclecode/" target="_blank" rel="noreferrer">
										<i className="fab fa-facebook"></i>
									</a>
								</div>
							</div>

							<hr />

							<section>
								<Typography variant="overline">
									Company no 468876545 nuclecode is registered 
									in the United Kingdom and Northern Ireland
								</Typography>
							</section>
						</Grid>
						<Grid item xs={1} md={2}>&#160;</Grid>
					</Grid>

					<section className="bottom-links-container">
						<a href="/terms-and-conditions">
							<Typography variant="overline">
								Terms & Conditions
							</Typography>
						</a>

						{/* <a href="https://nuclecode.uk">
							<Typography variant="overline">
								Unsubscribe
							</Typography>
						</a> */}
					</section>
				</div>
			</div>
		</Layout>
	);
}

export default MarketingEmail;
