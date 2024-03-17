import React from 'react';
import { Logo } from './@components';
import './header.scss'; 

function MinimalHeader() {
	return (
		<div className="header-container">
			<div className="container">
				<Logo />
			</div>
		</div>
	);
}

export default MinimalHeader;