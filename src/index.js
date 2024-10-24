import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import nuclecodeTheme from './styles/nuclecodeTheme';
import 'aos/dist/aos.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={nuclecodeTheme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
