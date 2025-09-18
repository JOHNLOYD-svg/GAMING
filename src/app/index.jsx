import React from "react";
import Layout from "./_layout";

const featuredGames = [
	{ title: "Space Invaders", description: "Classic arcade shooter!", image: "/assets/images/space_invaders.png" },
	{ title: "Puzzle Quest", description: "Solve challenging puzzles.", image: "/assets/images/puzzle_quest.png" },
	{ title: "Racing Rivals", description: "Race to the finish line!", image: "/assets/images/racing_rivals.png" },
];

const HomePage = () => (
	<Layout>
		<section style={{ textAlign: "center", marginBottom: "2rem" }}>
			<h1>Welcome to Gaming App!</h1>
			<p>Play, compete, and connect with gamers worldwide.</p>
		</section>
		<section>
			<h2 style={{ marginBottom: "1rem" }}>Featured Games</h2>
			<div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
				{featuredGames.map((game) => (
					<div key={game.title} style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #ccc", padding: "1rem", width: "220px" }}>
						<img src={game.image} alt={game.title} style={{ width: "100%", borderRadius: "6px" }} />
						<h3>{game.title}</h3>
						<p>{game.description}</p>
					</div>
				))}
			</div>
		</section>
	</Layout>
);

export default HomePage;
