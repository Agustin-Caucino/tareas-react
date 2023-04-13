import TaskCard from './TaskCard';
import { TaskContext } from './context/TaskContext';
import { useContext } from 'react';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white font-bold text-3xl mb-2 text-center">
        No hay tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((t, i) => {
        return <TaskCard key={i} task={t} />;
      })}
    </div>
  );
}

export default TaskList;
