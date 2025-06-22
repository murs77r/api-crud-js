// Seed para inserir contatos de exemplo

exports.seed = async function(knex) {
  await knex('contatos').del();

  await knex('contatos').insert([
    { nome: 'João Silva', numero: '(11) 99999-1234' },
    { nome: 'Maria Santos', numero: '(11) 98888-5678' },
    { nome: 'Pedro Costa', numero: '(11) 97777-9012' },
    { nome: 'Ana Oliveira', numero: '(11) 96666-3456' },
    { nome: 'Carlos Ferreira', numero: '(11) 95555-7890' }
  ]);
};
