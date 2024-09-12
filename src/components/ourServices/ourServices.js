import { Grid, Typography } from '@mui/material';
import Card from '../../components/card/card';
import { FaCode, FaServer, FaMobileAlt, FaBug, FaCogs, FaRobot } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import './ourServices.scss';

function OurServices() {

		const services = [
			{ title: 'Frontend Development', icon: FaCode, description: 'Crafting beautiful and intuitive user interfaces.', tech: ['React', 'Vue', 'Angular'], link: '/solutions/frontend' },
			{ title: 'Backend Development', icon: FaServer, description: 'Building robust and scalable server-side applications.', tech: ['Node.js', 'Python', 'Go'], link: '/solutions/backend' },
			{ title: 'Software Testing', icon: FaBug, description: 'Ensuring the quality and reliability of your software products.', tech: ['Selenium', 'Cypress'], link: '/solutions/testing' },
			{ title: 'Fullstack Development', icon: FaCogs, description: 'Delivering complete solutions for both frontend and backend.', tech: ['React', 'Node.js'], link: '/solutions/fullstack' },
			{ title: 'Mobile Development', icon: FaMobileAlt, description: 'Developing cross-platform mobile apps for iOS and Android.', tech: ['Swift', 'Kotlin', 'React Native'], link: '/solutions/mobile' },
			{ title: 'AI Development', icon: FaRobot, description: 'Providing AI, machine learning, and data analytics solutions.', tech: ['TensorFlow', 'PyTorch'], link: '/solutions/ai' },
		];

	return (
			<div className="our-services-container">
				<Typography variant="h2">Our Services</Typography>
				<div className="content-container tm-by3">
					<Grid container spacing={3}>
						{services.map((service, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card>
									<div className="card-content">
										<service.icon className="service-icon"/>
										<Typography variant="h3">{service.title}</Typography>
										<Typography variant="body1">{service.description}</Typography>
										<div className="tech-stack">
											{service.tech.map((tech, i) => (
												<span key={i} className="pill">{tech}</span>
											))}
										</div>
										<a href={service.link}>
											Learn more <BsArrowRight className="arrow-icon"/>
										</a>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
	);
}

export default OurServices;
