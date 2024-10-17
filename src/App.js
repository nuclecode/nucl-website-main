import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './pages/home/home';
import Solutions from './pages/solutions/solutions';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import EnquiryForm from './pages/enquiryForm/enquiryForm';
import HaveUsCallYou from './pages/haveUsCallYou/haveUsCallYou';
import Frontend from './pages/solutions/frontend/frontend';
import Backend from './pages/solutions/backend/backend';
import Testing from './pages/solutions/testing/testing';
import TermsAndConditions from './pages/termsAndConditions/termsAndConditions';
import MarketingEmail from './pages/marketingEmail/marketingEmail';
import Resources from './pages/resources/resources';
import Helmet from 'react-helmet';
import Demos from './pages/demos/Demos';
import AOS from 'aos';
import CalculateTests from "./pages/calculate-your-tests/CalculateTests";
import Showcase from "./pages/Showcase/Showcase";
// import BlogPost from "./pages/BlogPost/BlogPost";
// import Case1 from './components/case-studies/Case1';
// import Case2 from './components/case-studies/Case2';
// import Case3 from './components/case-studies/Case3';
// import Blog from './pages/blog/Blog';
// import ExpoReady from './pages/ExpoReady/ExpoReady';

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return (
        <>
			<Helmet>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-E5N4D8RK5M"></script>
				<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-E5N4D8RK5M');
					`}
				</script>
				<script src="//code.tidio.co/fyq1apam6wmtjp8xebfds6kbunwbjfly.js" async></script>
			</Helmet>
			{/*Helmet amend*/}
			<Router>
						<Routes>
							<Route path="/" exact element={<Home/>}/>
							<Route path="/showcase" exact element={<Showcase/>}/>
							<Route path="/solutions" element={<Solutions/>}/>
							<Route path="/about" element={<About/>}/>
							<Route path="/contact" element={<Contact/>}/>
							<Route path="/schedule-a-call" element={<EnquiryForm/>}/>
							<Route path="/have-us-call-you" element={<HaveUsCallYou/>}/>
							<Route path="/resources" element={<Resources/>}/>
							<Route path="/demos" element={<Demos/>}/>
							{/*<Route path="/blog" element={<Blog />} />*/}
							{/*<Route path="/blog/:id" element={<BlogPost />} />*/}


							<Route path="/calculate-your-tests" element={<CalculateTests/>}/>
							{/*<Route path="/expo-ready" element={<ExpoReady />}/>*/}


							<Route path="/solutions/frontend" element={<Frontend/>}/>
							<Route path="/solutions/backend" element={<Backend/>}/>
							<Route path="/solutions/testing" element={<Testing/>}/>

						{/* <Routes>
					<Route path="/case1" element={<Case1 />} />
					<Route path="/case2" element={<Case2 />} />
					<Route path="/case3" element={<Case3 />} />
				</Routes> */}

							<Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>

							<Route path="/sell-online" element={<MarketingEmail/>}/>
						</Routes>
			</Router>
		</>
);
}

export default App;
