import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
////import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";

const Cardd = props => {
	return (
		<div className="card" style="width: 18rem;">
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Cardd;
