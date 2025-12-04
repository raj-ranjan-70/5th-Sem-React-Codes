import React from "react";

// memoized item — only re-renders when `task` reference or callbacks change
const TodoItem = React.memo(
	({ task, onDelete, onMarkDone }) => {
		return (
			<li className="flex items-center justify-between px-3 py-2 border rounded">
				<span className={task.done ? "opacity-60 line-through" : ""}>{task.text}</span>
				<div className="flex gap-2">
					<button
						onClick={() => onMarkDone(task.id)}
						disabled={task.done}
						className="px-2 py-1 bg-green-500 text-white rounded disabled:opacity-50"
					>
						Done
					</button>
					<button
						onClick={() => onDelete(task.id)}
						disabled={task.done}
						className="px-2 py-1 bg-red-500 text-white rounded disabled:opacity-50"
					>
						Delete
					</button>
				</div>
			</li>
		);
	},
	(prev, next) => {
		// shallow compare: if same task object reference and callbacks unchanged, skip re-render
		return prev.task === next.task && prev.onDelete === next.onDelete && prev.onMarkDone === next.onMarkDone;
	}
);

export default function Child({ tasks, onDelete, onMarkDone }) {
	// ...existing code...
	return (
		<div>
			<h3 className="mb-2">Child Todo List</h3>
			<ul className="space-y-2">
				{tasks.map((task) => (
					<TodoItem key={task.id} task={task} onDelete={onDelete} onMarkDone={onMarkDone} />
				))}
			</ul>
		</div>
	);
}