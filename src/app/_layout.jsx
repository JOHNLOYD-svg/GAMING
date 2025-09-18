import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<header style={{ background: "#222", color: "#fff", padding: "1rem" }}>
				<nav style={{ display: "flex", gap: "2rem" }}>
					<Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
					<Link to="/play" style={{ color: "#fff", textDecoration: "none" }}>Play</Link>
					<Link to="/collab" style={{ color: "#fff", textDecoration: "none" }}>Collab</Link>
					<Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>Profile</Link>
					<Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
					<Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
				</nav>
			</header>
			<main style={{ flex: 1, padding: "2rem", background: "#f5f5f5" }}>
				{children}
			</main>
			<footer style={{ background: "#222", color: "#fff", textAlign: "center", padding: "1rem" }}>
				&copy; {new Date().getFullYear()} Gaming App. All rights reserved.
			</footer>
		</div>
	);
};

export default Layout;
