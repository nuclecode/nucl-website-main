import { Typography, Button } from '@mui/material';
import Card from '../../components/card/card';

import './readyToStart.scss';

function ReadyToStart() {
	return (
		<div className="ready-to-start-container">
			<Typography variant="h2">Ready to start a project?</Typography>

			<div className="content-container tm-by3">
				<Card>
					<Typography variant="body1">
						Have a project in mind or need help with an existing one?
					</Typography>

					<div className="tm-by2">
						<a href="/schedule-a-call">
							<Button className="book-a-chat-button">Book a call</Button>
						</a>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default ReadyToStart;
