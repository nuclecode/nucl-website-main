import { Typography } from '@mui/material';
import Card from '../../components/card/card';

import './aboutNuclecode.scss';

function AboutNuclecode() {
	return (
		<div className="about-nuclecode-container">
			<Typography variant="h2">About Nuclecode</Typography>

			<div className="tm-by3">
				<Card>
					<Typography variant="body1">
						Learn more about our company and our mission to help 
						businesses succeed.
					</Typography>

					<div className="tm-by2">
						<a href="/about">Learn more</a>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default AboutNuclecode;