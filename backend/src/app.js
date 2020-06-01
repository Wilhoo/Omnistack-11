const express = require('express');
const cors = require('cors');

const { errors } = require('celebrate');
const routes = require('./routes');
//importando o express para a variavel app
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
//rota

//GET: busca/lista uma info do backend
//POST: Criar uma info no backend
//PUT: Alterar uma info no backend
//Delete: Deletar uma info do backend

/*
    Tipos de parâmetro:

    Query Params: Parametros nomeados no envio da rota após "?" (Filtros, paginação, etc)
    Route Params: Parametros utilizados para identificar recursos
*/

//fazendo o programa escutar essa porta
module.exports = app;