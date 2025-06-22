require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..", "public")));

const contatosRoutes = require('./routes/contatos');

app.use(express.json());

app.use('/contatos', contatosRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor da agenda de contatos rodando na porta ${PORT}`);
});
