import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [deleting, setDeleting] = useState(null);

  const addTask = () => {
    if (newTask) {
      setTasks([ ...tasks, {id: Date.now(), text: newTask, completed: false }]);
    }
    setNewTask("");
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task ));
  };

  const deleteTask = (id) => {
    setDeleting(id);

    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== id));
      setDeleting(null);
    }, 500); 
  };

  return (
    <>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ transition: "opacity 0.5s ease", opacity: deleting === task.id ? 0 : 1}}>
            <span onClick={() => toggleCompletion(task.id)}>{task.text}</span>

            <button onClick={() => deleteTask(task.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
