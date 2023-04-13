import { createContext, useState, useEffect } from 'react';
import { tareas } from '../tasks';
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(tasktitle, taskDesc) {
    setTasks([
      ...tasks,
      {
        title: tasktitle,
        id: tasks.length,
        description: taskDesc,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  useEffect(() => {
    setTasks(tareas);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
