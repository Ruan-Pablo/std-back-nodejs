const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')

const routes = require("./src/routes/filmes.routes")
mongoose.connect('mongodb://localhost:27017/std-back-nodejs-netflix')

// dev - ambiente de desenvolvimento: tem a ver com variavel de ambiente do node
app.use(morgan('dev'));
app.use(bodyParse.json()) // assim eu consigo recuperar o conteúdo da req
app.use('/', routes)

app.listen(3000, () => {
    console.log('Meu servidor esta funfando')
})