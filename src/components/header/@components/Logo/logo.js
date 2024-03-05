import { ReactComponent as LogoImage } from '../../../../assets/svg/logo-website.svg';
import './logo.scss';

function Logo() {
	return (
		<div className="header-logo-container">
			<a href="/">
				<LogoImage />
			</a>
		</div>
	);
}

export default Logo;