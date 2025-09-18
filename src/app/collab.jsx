import React, { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database";
import { db } from "../firebaseConfig";
import Layout from "./_layout";


const sampleUsers = ["John", "Bob", "Charlie", "Diana", "Eve"];

const Collab = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const messagesRef = ref(db, "collabMessages");
		onValue(messagesRef, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setMessages(Object.values(data));
			} else {
				setMessages([]);
			}
		});
	}, []);

	const handleSend = (e) => {
		e.preventDefault();
		if (message.trim()) {
			const user = sampleUsers[Math.floor(Math.random() * sampleUsers.length)];
			const messagesRef = ref(db, "collabMessages");
			push(messagesRef, { user, text: message });
			setMessage("");
		}
	};

	return (
		<Layout>
			<div style={{ maxWidth: "500px", margin: "3rem auto", background: "#fff", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px #ccc" }}>
				<h2 style={{ textAlign: "center" }}>Collaboration Room</h2>
				<div style={{ marginBottom: "2rem", minHeight: "120px", background: "#f5f5f5", padding: "1rem", borderRadius: "6px" }}>
					{messages.length === 0 ? (
						<p style={{ color: "#888" }}>No messages yet. Start collaborating!</p>
					) : (
						<ul style={{ listStyle: "none", padding: 0 }}>
							{messages.map((msg, idx) => (
								<li key={idx} style={{ marginBottom: "0.5rem", background: "#e0e0e0", padding: "0.5rem", borderRadius: "4px" }}>
									<strong>{msg.user}:</strong> {msg.text}
								</li>
							))}
						</ul>
					)}
				</div>
				<form onSubmit={handleSend} style={{ display: "flex", gap: "0.5rem" }}>
					<input
						type="text"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Type your message..."
						style={{ flex: 1, padding: "0.5rem" }}
					/>
					<button type="submit" style={{ padding: "0.5rem 1rem", background: "#222", color: "#fff", border: "none", borderRadius: "4px" }}>
						Send
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default Collab;
