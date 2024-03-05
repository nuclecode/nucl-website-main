import { Button } from '@mui/material';
import './headerButtons.scss';

function HeaderButtons() {
	return (
		<div className="header-buttons-container">
			<a href="/schedule-a-call">
				<Button variant="outlined">Book a chat</Button>
			</a>
		</div>
	);
}

export default HeaderButtons;