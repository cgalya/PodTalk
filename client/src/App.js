import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';
import Footer from './partials/footer/Footer';
import Header from './partials/header/Header';
import './App.css';

const App = () => (
	<Router>
		<div>
			<Header />
			<Routes />
			<Footer />
		</div>
	</Router>
);


export default App;
