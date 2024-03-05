import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material';

import './card.scss';

function Card({children}) {
	return (
		<div className="card-container">
			<MuiCard>
				<MuiCardContent>
					{children}
				</MuiCardContent>
			</MuiCard>
		</div>
	);
}

export default Card;