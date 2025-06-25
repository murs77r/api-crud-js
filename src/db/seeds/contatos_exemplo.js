// Seed para inserir contatos de exemplo

exports.seed = async function(knex) {
  await knex('contatos').del();

  await knex('contatos').insert([
    {id: '1', nome: 'João Silva', numero: '(11) 99999-1234' },
    {id: '2', nome: 'Maria Santos', numero: '(11) 98888-5678' },
    {id: '3', nome: 'Pedro Costa', numero: '(11) 97777-9012' },
    {id: '4', nome: 'Ana Oliveira', numero: '(11) 96666-3456' },
    {id: '5', nome: 'Carlos Ferreira', numero: '(11) 95555-7890' },
    {id: '6', nome: 'Bruna Souza', numero: '(21) 91234-5678' },
    {id: '7', nome: 'Lucas Lima', numero: '(31) 93456-7890' },
    {id: '8', nome: 'Fernanda Rocha', numero: '(41) 94567-8901' },
    {id: '9', nome: 'Ricardo Alves', numero: '(51) 95678-9012' },
    {id: '10', nome: 'Patrícia Mendes', numero: '(61) 96789-0123' },
    {id: '11', nome: 'Gabriel Martins', numero: '(71) 97890-1234' },
    {id: '12', nome: 'Juliana Ramos', numero: '(81) 98901-2345' },
    {id: '13', nome: 'Eduardo Pires', numero: '(91) 99012-3456' },
    {id: '14', nome: 'Camila Teixeira', numero: '(85) 99123-4567' },
    {id: '15', nome: 'Roberto Dias', numero: '(95) 99234-5678' }
  ]);
};
