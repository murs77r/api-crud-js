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

-- Inserir dados de exemplo
INSERT INTO contatos (nome, numero) VALUES
('João Silva', '(11) 99999-1234'),
('Maria Santos', '(11) 98888-5678'),
('Pedro Costa', '(11) 97777-9012'),
('Ana Oliveira', '(11) 96666-3456'),
('Carlos Ferreira', '(11) 95555-7890');

-- Verificar os dados inseridos
SELECT * FROM contatos ORDER BY nome;
