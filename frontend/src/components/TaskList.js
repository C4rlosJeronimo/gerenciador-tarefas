import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function TaskList({ tasks, onEdit, onDelete }) {
  
  const getStatusClass = (status) => `status-${status.replace(' ', '-')}`;

  return (
    <div className="task-list">
      <h2>Minhas Tarefas</h2>
      {tasks.length === 0 ? (
        
        <p className="empty-state">Uhu! Nenhuma tarefa pendente. Que tal adicionar uma nova?</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="task-item">
              <div className="task-info">
                <h3>{task.titulo}</h3>
                <p>{task.descricao}</p>
                {}
                <span className={`status-badge ${getStatusClass(task.status)}`}>
                  {task.status}
                </span>
              </div>
              <div className="task-actions">
                <button className="edit-btn" onClick={() => onEdit(task)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;