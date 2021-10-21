import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";

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
export default Home;
