import "bootstrap/dist/css/bootstrap.min.css";
//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
//import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Cardd } from "../component/card.js";
import "../../styles/home.scss";
export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<Cardd />
		</div>
	);
};
