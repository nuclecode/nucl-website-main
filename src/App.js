import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Solutions from './pages/solutions/solutions';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import EnquiryForm from './pages/enquiryForm/enquiryForm';
import Frontend from './pages/solutions/frontend/frontend';
import Backend from './pages/solutions/backend/backend';
import Testing from './pages/solutions/testing/testing';

// import Case1 from './components/case-studies/Case1';
// import Case2 from './components/case-studies/Case2';
// import Case3 from './components/case-studies/Case3';

function App() {
	return (
		<div className="page-container">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<Home />} />
					{/* <Route path="/portfolio" element={<Portfolio />} /> */}
					<Route path="/solutions" element={<Solutions />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/schedule-a-call" element={<EnquiryForm />} />
				</Routes>
				<Routes>
					<Route path="/solutions/frontend" element={<Frontend />} />
					<Route path="/solutions/backend" element={<Backend />} />
					<Route path="/solutions/testing" element={<Testing />} />
				</Routes>
				{/* <Routes>
					<Route path="/case1" element={<Case1 />} />
					<Route path="/case2" element={<Case2 />} />
					<Route path="/case3" element={<Case3 />} />
				</Routes> */}
				<Footer />
			</Router>
		</div>
	);
}

export default App;
