const db = require('../db/db');

exports.getAllTasks = (req, res) => {
  const query = 'SELECT * FROM tarefas';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

exports.addTask = (req, res) => {
  const { titulo, descricao, status } = req.body;

  if (!titulo || !status) {
    return res.status(400).json({ error: 'Título e status são obrigatórios.' });
  }

  const query = 'INSERT INTO tarefas (titulo, descricao, status) VALUES (?, ?, ?)';
  db.query(query, [titulo, descricao, status], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).json({ id: results.insertId, titulo, descricao, status });
  });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, status } = req.body;
  if (!titulo || !status) {
    return res.status(400).json({ error: 'Título e status são obrigatórios.' });
  }

  const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ? WHERE id = ?';
  db.query(query, [titulo, descricao, status, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.json({ message: 'Tarefa atualizada com sucesso!' });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tarefas WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    res.json({ message: 'Tarefa removida com sucesso!' });
  });
};