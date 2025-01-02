const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParse = require('body-parser')

const routes = require("./src/routes/filmes.routes")

// dev - ambiente de desenvolvimento: tem a ver com variavel de ambiente do node
app.use(morgan('dev'));
app.use(bodyParse.json()) // assim eu consigo recuperar o conteúdo da req
app.use('/', routes)

app.listen(3000, () => {
    console.log('Meu servidor esta funfando')
})