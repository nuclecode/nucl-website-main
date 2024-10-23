import React from 'react';
import { Helmet } from 'react-helmet';
import { HeaderType, FooterType } from '../libs/enums';
import Header from '../components/header/header';
import MinimalHeader from '../components/header/minimalHeader';
import Footer from '../components/footer/footer';
import TickerLine from "../components/TickerLine/TickerLine";
const PageHeader = ({header}) => {
	if (header === HeaderType.Minimal) {
		return <MinimalHeader />;
	}
	else if (header === HeaderType.None) {
		return <></>;
	}
	else {
		return <Header />
	}
};

const PageFooter = ({footer}) => {
	if (footer === FooterType.None) {
		return <></>;
	}
	else {
		return <Footer />
	}
};

function Layout({
	header = HeaderType.Full, 
	footer = FooterType.Full, 
	title,
	description,
	children
}) {

	return (
		<div className="page-container">
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
			<TickerLine />
			<PageHeader header={header} />
			{children}
			<PageFooter footer={footer} />
		</div>
	);
}

export default Layout;