import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen h-fit">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
