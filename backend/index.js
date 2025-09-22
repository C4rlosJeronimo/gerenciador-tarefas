const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3001; 

app.use(cors()); 
app.use(express.json()); 

app.use('/tarefas', taskRoutes);  

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});