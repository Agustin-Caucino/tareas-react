import { useContext } from 'react';
import { useState } from 'react';
import { TaskContext } from './context/TaskContext';
function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { createTask } = useContext(TaskContext);

  const onHandleSumbit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={onHandleSumbit} className="bg-slate-700 p-5 mb-4">
        <h1 className="text-white font-bold text-3xl mb-2">Añade una tarea</h1>
        <input
          placeholder="Escriba su tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe descripcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="text-white bg-green-600 p-2 rounded-md hover:bg-green-400">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
