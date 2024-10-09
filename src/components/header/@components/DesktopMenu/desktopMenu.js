import './desktopMenu.scss';

function DesktopMenu() {
	return (
		<div className="header-desktop-menu-container">
			<div className="item"><a href="/">Home</a></div>
			<div className="item"><a href="/showcase">Showcase</a></div>
			<div className="item"><a href="/demos">Demos</a></div>
			<div className="item"><a href="/solutions">Solutions</a></div>
			<div className="item"><a href="/services">Services</a></div>
			<div className="item"><a href="/resources">Resources</a></div>
			<div className="item"><a href="/about">About</a></div>
			<div className="item"><a href="/contact">Contact</a></div>
			{/*<div className="item"><a href="/blog">Blog</a></div>*/}
		</div>
	);
}

export default DesktopMenu;