const express = require('express');
const router = express.Router();

// Simulação de banco de dados em memória
let tarefas = [
  {
    id: 1,
    descricao: "Tarefa de exemplo",
    status: "pendente",
  },
];
let nextId = 2;

// Rota para criação de tarefa
router.post('/tarefas', (req, res) => {
  const { descricao, status } = req.body;

  if (!descricao) {
    return res.status(400).json({ message: 'A descrição é obrigatória.' });
  }

  const novaTarefa = {
    id: nextId++,
    descricao,
    status: status || 'pendente', // Define status como 'pendente' se não fornecido
  };

  tarefas.push(novaTarefa);

  return res.status(201).json({
    message: 'Tarefa cadastrada com sucesso!',
    tarefa: novaTarefa,
  });
});

// Rota para consulta de todas as tarefas
router.get('/tarefas', (req, res) => {
  return res.status(200).json(tarefas);
});

// Rota para atualização de tarefa
router.put('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const { descricao, status } = req.body;

  // Encontra o índice da tarefa pelo ID
  const tarefaIndex = tarefas.findIndex((t) => t.id === parseInt(id, 10));

  if (tarefaIndex === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  // Atualiza somente os campos fornecidos
  tarefas[tarefaIndex] = {
    ...tarefas[tarefaIndex],
    descricao: descricao !== undefined ? descricao : tarefas[tarefaIndex].descricao,
    status: status !== undefined ? status : tarefas[tarefaIndex].status,
  };

  return res.status(200).json({
    message: 'Tarefa atualizada com sucesso!',
    tarefa: tarefas[tarefaIndex],
  });
});

// Rota para exclusão de tarefa
router.delete('/tarefas/:id', (req, res) => {c
  const { id } = req.params;

  // Encontra o índice da tarefa pelo ID
  const tarefaIndex = tarefas.findIndex((t) => t.id === parseInt(id, 10));

  if (tarefaIndex === -1) {
    return res.status(404).json({ message: 'Tarefa não encontrada.' });
  }

  // Remove a tarefa da lista
  tarefas.splice(tarefaIndex, 1);

  return res.status(200).json({ message: 'Tarefa deletada com sucesso.' });
});

module.exports = router;
