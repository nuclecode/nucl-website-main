import { Typography } from "@mui/material";

import "./aboutNuclecode.scss";

function AboutNuclecode() {
	return (
		<div className="about-nuclecode-container">
			<Typography variant="h2">About nuclecode</Typography>

			<div className="tm-by3">
				<page-section>
					<Typography variant="subtitle1" className="subtitle">
						nuclecode web experts specialize in crafting bespoke web
						solutions tailored to the unique needs and vision of
						your business.
					</Typography>
				</page-section>

				<page-section>
					<Typography variant="h3">Our Mission</Typography>

					<Typography variant="body1">
						At nuclecode, our mission is to deliver secure,
						scalable, and easy-to-maintain code. We are dedicated to
						empowering businesses with innovative digital solutions
						that not only drive growth and success but also ensure
						the reliability and sustainability of their software
						infrastructure. Through our commitment to excellence, we
						strive to provide our clients with the confidence and
						peace of mind they need to thrive in today's dynamic
						digital landscape.
					</Typography>
				</page-section>

				<page-section>
					<Typography variant="h3">Why nuclecode?</Typography>

					<Typography variant="body1">
						We have a keen eye for web design and a passion for
						clean programming, ensuring that each web solution we
						create not only looks stunning but also functions
						seamlessly across all devices. Our special focus is on
						the security of your code base, so any piece of code you
						receive from us is tested, secure and up-to-date with
						all the latest industry standards, guaranteeing your
						piece of mind and greater protection from cyber attacks.
					</Typography>
				</page-section>
			</div>
		</div>
	);
}

export default AboutNuclecode;
