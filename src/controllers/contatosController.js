const db = require('../db/knex');

// Buscar contato por ID
exports.obter = async (req, res) => {
  try {
    const contato = await db("contatos").where({ id: req.params.id }).first();
    if (!contato) {
      return res.status(404).json({ erro: "Contato não encontrado" });
    }
    res.json(contato);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar contato" });
  }
};

// Listar todos os contatos
exports.listar = async (req, res) => {
  try {
    const contatos = await db('contatos').orderBy('nome');
    res.json(contatos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar contatos' });
  }
};

// Inserir novo contato
exports.inserir = async (req, res) => {
  try {
    const { nome, numero } = req.body;
    
    if (!nome || !numero) {
      return res.status(400).json({ erro: 'Nome e número são obrigatórios' });
    }
    
    await db('contatos').insert({ nome, numero });
    res.status(201).json({ mensagem: 'Contato inserido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao inserir contato' });
  }
};

// Atualizar contato existente
exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, numero } = req.body;
    
    if (!nome || !numero) {
      return res.status(400).json({ erro: 'Nome e número são obrigatórios' });
    }
    
    const resultado = await db('contatos').where({ id }).update({ nome, numero });
    
    if (resultado === 0) {
      return res.status(404).json({ erro: 'Contato não encontrado' });
    }
    
    res.json({ mensagem: 'Contato atualizado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar contato' });
  }
};

// Excluir contato
exports.excluir = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await db('contatos').where({ id }).del();
    
    if (resultado === 0) {
      return res.status(404).json({ erro: 'Contato não encontrado' });
    }
    
    res.json({ mensagem: 'Contato excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao excluir contato' });
  }
};
