import React from 'react';
import Layout from '../../layout/layout';
import { Typography } from '@mui/material';
import Card from '../../components/card/card';
import ReadyToStart from '../../components/readyToStart/readyToStart';

import './about.scss';

function About () {
    return (
		<Layout title="About Us | nuclecode - Your Trusted Web Development Partner." description="Learn more about nuclecode, our mission, vision, and the team of experts dedicated to delivering innovative web development solutions for your business.">
			<div className="about-page-container page-top-space">
				<div className="container relative">
					<Typography variant="h1">About Us</Typography>
	    
					<page-section>
						<Typography variant="subtitle1" className="subtitle">
							pronounced <span dangerouslySetInnerHTML={{ __html: "/ˈnjuː.kliˌkoʊd/" }} />
						</Typography>
					</page-section>
	
					<page-section>
						<Typography variant="subtitle1" className="subtitle">
							nuclecode web experts specialize in crafting bespoke 
							web solutions tailored to the unique needs and vision of 
							your business.
						</Typography>
					</page-section>

					<page-section>
						<Typography variant="h2">Our Mission</Typography>

						<div className="tm-by3">
							<Card>
								<Typography variant="body1">
									At nuclecode, our mission is to deliver secure, scalable, 
									and easy-to-maintain code. We are dedicated to empowering 
									businesses with innovative digital solutions that not only 
									drive growth and success but also ensure the reliability and 
									sustainability of their software infrastructure. Through our 
									commitment to excellence, we strive to provide our clients with 
									the confidence and peace of mind they need to thrive in today&apos;s 
									dynamic digital landscape.
								</Typography>
							</Card>
						</div>
					</page-section>

					<page-section>
						<Typography variant="h2">Methodology & Process</Typography>

						<div className="tm-by3">
							<Card>
								<Typography variant="body1">
									<section>
										At nuclecode, we believe that a systematic approach 
										is key to delivering exceptional results. Our methodology 
										is built on years of experience and a commitment to 
										excellence, ensuring that every project we undertake 
										is executed with precision and care.
									</section>

									<section>
										<span className="bold">1. Discovery & Planning:</span>&#160;
										Understand your unique needs and objectives. 
										We take the time to listen to your ideas, goals,
										and challenges, conducting thorough research to gain
										insights into your industry and target audience.
										Based on our findings, we collaborate with you to develop a 
										comprehensive plan that outlines the scope, timeline, and 
										deliverables of the project.
									</section>

									<section>
										<span className="bold">2. Design & Prototyping:</span>&#160;
										With a clear plan in place, our talented design team gets
										to work bringing your vision to life. We create wireframes
										and prototypes that provide a visual representation of the
										final product, allowing you to see how the design will flow 
										and function. We welcome your feedback and iterate on the designs 
										until we achieve a perfect balance of aesthetics and usability.
									</section>

									<section>
										<span className="bold">3. Development & Implementation:</span>&#160;
										Once the designs are approved, our development team takes over to 
										turn them into reality. Using the latest technologies and best practices, 
										we build robust, scalable solutions that meet your requirements and exceed 
										your expectations. Throughout the development process, we maintain open communication, 
										providing regular updates and seeking your input to ensure that the final product aligns 
										with your vision.
									</section>

									<section>
										<span className="bold">4. Testing & Quality Assurance:</span>&#160;
										Quality is at the core of everything we do. Before launching the website,
										we conduct rigorous testing to identify and resolve any bugs or issues. 
										Our dedicated QA team performs thorough testing across multiple devices 
										and browsers, ensuring that your website performs flawlessly in every scenario. 
										We don&apos;t consider the project complete until it meets our high 
										standards of excellence.
									</section>

									<section>
										<span className="bold">5. Deployment & Support:</span>&#160;
										With the website thoroughly tested and approved, we proceed to deployment. 
										We handle all aspects of the deployment process, ensuring a smooth 
										transition from development to live environment. But our support 
										doesn&apos;t end there. We provide ongoing maintenance and support 
										services to keep your website running smoothly and securely, 
										helping you navigate any challenges that may arise.
									</section>
								</Typography>
							</Card>
						</div>
					</page-section>

					<page-section>
						<Typography variant="h2">Why nuclecode?</Typography>

						<div className="tm-by3">
							<Card>
								<Typography variant="body1">
									We have a keen eye for web design and a passion for clean programming,
									ensuring that each web solution we create not only looks stunning
									but also functions seamlessly across all devices.
									Our special focus is on the security of your code base, so any piece
									of code you receive from us is tested, secure and up-to-date with all the
									latest industry standards, guaranteeing your piece of mind and greater 
									protection from cyber attacks.
								</Typography>
							</Card>
						</div>
					</page-section>

					<page-section>
						<ReadyToStart />
					</page-section>
				</div>
			</div>
		</Layout>
    );
}

export default About;
