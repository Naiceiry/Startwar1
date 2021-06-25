import React from "react";
import { Link } from "react-router-dom";
import starw from "../../img/sw.jpg";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img src={starw} />
			</Link>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
