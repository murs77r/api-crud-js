-- Script MySQL para criar o banco de dados da Agenda de Contatos

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS agenda_contatos;
USE agenda_contatos;

-- Criar tabela de contatos
CREATE TABLE IF NOT EXISTS contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Os dados de exemplo estão sendo inseridos utilizando-se do Knex.JS

-- Verificar os dados inseridos
SELECT * FROM contatos ORDER BY nome;
