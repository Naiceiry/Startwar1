import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
////import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Cardd } from "./component/card.js";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/card">
						<Cardd />
					</Route>
					<Route exact path="/layout">
						<Layout />
					</Route>
					<Route exact path="/single/:theid">
						<Single />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
