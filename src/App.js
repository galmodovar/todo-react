import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appt',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Doctor Appt',
        day: 'Feb 6th at 2:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Doctor Appt',
        day: 'Feb 7th at 2:30pm',
        reminder: true
    }
])

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}




  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to Show"}
    </div>
  );
}

export default App;
