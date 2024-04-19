import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { AddTaskForm } from "./components/AddTaskForm";
import { Task } from './components/Task';
import axios from 'axios';
import { API_URL } from './utils';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
});

function App() {
  const [tasks, setTasks] = useState([])
  const axios = require('axios');

  const fetchTasks = async () => {
    // console.log(API_URL)
    // try {
    //   const { data } = axios.get(API_URL)
    //   .then(r => console.log(r))
    //   // console.log(data)
    //   setTasks(data)
    // } catch (err) {
    //   console.log(err)
    // }
    console.log("fetch tasks function")
    axios.get(API_URL).then(r => console.log(r))
  };

  useEffect(() => {
    // console.log("useeffect fetch tasks")
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
