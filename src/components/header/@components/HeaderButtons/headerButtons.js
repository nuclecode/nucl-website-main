import { Button } from "@mui/material";
import "./headerButtons.scss";

function HeaderButtons() {
	return (
		<div className="header-buttons-container">
			<a href="/pay-deposit">Pay Deposit</a>

			<a href="/schedule-a-call">
				<Button variant="outlined">Book a call</Button>
			</a>
		</div>
	);
}

export default HeaderButtons;
