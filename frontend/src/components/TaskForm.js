import React, { useState, useEffect } from 'react';

function TaskForm({ onSave, onCancel, currentTask }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('Pendente');

  
  useEffect(() => {
    if (currentTask) {
      setTitulo(currentTask.titulo);
      setDescricao(currentTask.descricao);
      setStatus(currentTask.status);
    } else {
        setTitulo('');
        setDescricao('');
        setStatus('Pendente');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo) { 
        alert('O título é obrigatório!');
        return;
    }
    onSave({ titulo, descricao, status });
    setTitulo('');
    setDescricao('');
    setStatus('Pendente');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>{currentTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
      <input
        type="text"
        placeholder="Título da Tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></textarea>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pendente">Pendente</option>
        <option value="Em Andamento">Em Andamento</option>
        <option value="Concluída">Concluída</option>
      </select>
      <div className="form-buttons">
        <button type="submit">{currentTask ? 'Salvar Alterações' : 'Adicionar Tarefa'}</button>
        {currentTask && <button type="button" onClick={onCancel}>Cancelar</button>}
      </div>
    </form>
  );
}

export default TaskForm;