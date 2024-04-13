import { Outlet, Link } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
