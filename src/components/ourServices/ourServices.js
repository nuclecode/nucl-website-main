import { Grid, Typography } from '@mui/material';
import Card from '../../components/card/card';

import './ourServices.scss';

function OurServices() {
	return (
		<div className="our-services-container">
			<Typography variant="h2">Our Services</Typography>

			<div className="content-container tm-by3">
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Card>
							<Typography variant="h3">
								Frontend Development
							</Typography>

							<Typography variant="body1">
								Crafting beautiful and intuitive user interfaces.
							</Typography>

							<div className="tm-by2">
								<a href="/solutions/frontend">Learn more</a>
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<Typography variant="h3">
								Backend Development
							</Typography>

							<Typography variant="body1">
								Building robust and scalable server-side applications.
							</Typography>

							<div className="tm-by2">
								<a href="/solutions/backend">Learn more</a>
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<Typography variant="h3">
								Software Testing
							</Typography>

							<Typography variant="body1">
								Ensuring the quality and reliability of 
								your software products.
							</Typography>

							<div className="tm-by2">
								<a href="/solutions/testing">Learn more</a>
							</div>
						</Card>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default OurServices;