import { useEffect, useState } from "react";
import axios from "axios";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  const [isEdit, setIsEdit] = useState("");

  // const [editTask, setEditTask] = useState("");

  useEffect(() => {
    // get tasks func define
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    // call getTask func
    getTasks();
  }, []);

  // Fetch todos
  const fetchTasks = async () => {
    // const res = await fetch('http://localhost:5000/api/todos');
    const res = await axios.get("http://localhost:5000/api/todos");
    const data = await res.data;
    return data;
  };

  // save task func
  const addTask = async (task) => {
    // const res = await fetch('http://localhost:5000/api/todos', {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(task),
    //   });
    const res = await axios.post("http://localhost:5000/api/todos", task);
    const data = await res.data;
    setTasks([data, ...tasks]);
  };

  // delete task func
  const deleteTask = async (_id) => {
    // await fetch(`http://localhost:5000/api/todos/${_id}`, {method: 'DELETE'})
    await axios.delete(`http://localhost:5000/api/todos/${_id}`);
    setTasks(tasks.filter((task) => task._id !== _id));
  };

  // update task func
  const setUpdateTask = async (task) => {
    await axios.put(`http://localhost:5000/api/todos/${task._id}`, {
      text: task.text,
    });

    tasks.map((singleTask) => 
      singleTask._id === task._id ? singleTask.text = task.text : null,
      // if (singleTask._id === task._id) {
      //     return singleTask.text = task.text;
      // }
    );
    // hide edit form
    setIsEdit("");
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={!showAddTask}
      />
      {showAddTask && <AddTaskForm onAdd={addTask} />}
      <hr />
      {tasks.length > 0
        ? tasks.map((task, index) => (
            <div>
              {isEdit === task._id ? (
                <EditTaskForm
                  key={index}
                  task={task}
                  setEditTask={setUpdateTask}
                />
              ) : (
                <Task
                  key={index}
                  task={task}
                  onDelete={deleteTask}
                  onEdit={setIsEdit}
                />
              )}
            </div>
          ))
        : "No Tasks Available!"}
      <Footer />
    </div>
  );
}

export default App;
