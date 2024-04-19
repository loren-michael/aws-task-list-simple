import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from './components/Task';
import { API_URL } from './utils';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  const [tasks, setTasks] = useState([])

  function fetchTasks() {
    fetch(API_URL)
    .then(r => r.json())
    .then(data => setTasks(data))
  }

  useEffect(() => {
    fetchTasks();
  }, [])

  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <AddTaskForm fetchTasks={fetchTasks} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </ThemeProvider>
  );
};

export default App;
