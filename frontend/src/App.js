import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; 

const API_URL = 'http://localhost:3001/tarefas';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null); 
  const [error, setError] = useState('');

  
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError('');
    } catch (err) {
      setError('Falha ao buscar as tarefas. O servidor backend está rodando?');
      console.error(err);
    }
  };

  const handleSaveTask = async (task) => {
    try {
      if (editingTask) {
        
        await axios.put(`${API_URL}/${editingTask.id}`, task);
      } else {
        
        await axios.post(API_URL, task);
      }
      setEditingTask(null);
      fetchTasks(); 
    } catch (err) {
      setError('Falha ao salvar a tarefa.');
      console.error(err);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks(); 
    } catch (err) {
      setError('Falha ao deletar a tarefa.');
      console.error(err);
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
  }

  return (
    <div className="App-container">
      <header>
        <h1>Gerenciador de Tarefas</h1>
      </header>
      <main>
        {}
        <TaskForm
          onSave={handleSaveTask}
          onCancel={cancelEdit}
          currentTask={editingTask}
        />
        {}
        {error && <p className="error-message">{error}</p>}
        {}
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </main>
      <footer>
        <p>Desenvolvido por: [CARLOS JERONIMO]</p> {}
      </footer>
    </div>
  );
}

export default App;
