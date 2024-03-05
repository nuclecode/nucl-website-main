import './desktopMenu.scss';

function DesktopMenu() {
	return (
		<div className="header-desktop-menu-container">
			<item><a href="/">Home</a></item>
			<item><a href="/solutions">Solutions</a></item>
			<item><a href="/about">About</a></item>
			<item><a href="/contact">Contact</a></item>
		</div>
	);
}

export default DesktopMenu;