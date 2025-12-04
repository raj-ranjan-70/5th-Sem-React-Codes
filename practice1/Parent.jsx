import React, { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Buy groceries", done: false },
		{ id: 2, text: "Walk the dog", done: false },
		{ id: 3, text: "Finish report", done: false },
	]);

	const handleDelete = useCallback((id) => {
		setTasks((prev) => prev.filter((t) => t.id !== id));
	}, []);

	const handleMarkDone = useCallback((id) => {
		setTasks((prev) =>
			prev.map((t) => (t.id === id ? { ...t, done: true } : t))
		);
	}, []);

	return (
		<div className="p-4">
			<h2 className="text-lg font-semibold mb-3">Parent Task List</h2>
			<Child tasks={tasks} onDelete={handleDelete} onMarkDone={handleMarkDone} />
		</div>
	);
}