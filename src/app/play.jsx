import React, { useState } from "react";
import Layout from "./_layout";

const games = [
	{ name: "Space Invaders", description: "Classic arcade shooter!", image: "/assets/images/space_invaders.png" },
	{ name: "Puzzle Quest", description: "Solve challenging puzzles.", image: "/assets/images/puzzle_quest.png" },
	{ name: "Racing Rivals", description: "Race to the finish line!", image: "/assets/images/racing_rivals.png" },
];

const Play = () => {
	const [selectedGame, setSelectedGame] = useState(null);

	return (
		<Layout>
			<div style={{ textAlign: "center" }}>
				<h2>Choose a Game to Play</h2>
				<div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
					{games.map((game) => (
						<div key={game.name} style={{ background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #ccc", padding: "1rem", width: "220px", cursor: "pointer" }}
							onClick={() => setSelectedGame(game)}>
							<img src={game.image} alt={game.name} style={{ width: "100%", borderRadius: "6px" }} />
							<h3>{game.name}</h3>
							<p>{game.description}</p>
						</div>
					))}
				</div>
				{selectedGame ? (
					<div style={{ marginTop: "2rem" }}>
						<h2>Now Playing: {selectedGame.name}</h2>
						<div style={{ background: "#eee", padding: "2rem", borderRadius: "8px" }}>
							<p>Game integration coming soon!</p>
							<img src={selectedGame.image} alt={selectedGame.name} style={{ width: "180px", borderRadius: "6px" }} />
						</div>
					</div>
				) : (
					<p>Select a game above to start playing.</p>
				)}
			</div>
		</Layout>
	);
};

export default Play;
