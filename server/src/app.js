// importando dependências

const express = require("express");
const cors    = require("cors");
const routes  = require("./routes/routes");

// acessando as chaves de config do .env

require("dotenv").config();

// instancia o express, atribuindo regras de cors e
// declarando retornos em json

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;