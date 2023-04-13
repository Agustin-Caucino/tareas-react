import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TaskContextProvider } from '/Users/aguscaucino/Desktop/vite-project/src/context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
