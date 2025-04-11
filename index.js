const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const database = require('./src/services/database') // faz conexão com o banco

const filmeRoutes = require("./src/routes/filmes.routes")
const usuarioRoutes = require("./src/routes/usuarios.routes")
const episodioRoutes = require("./src/routes/episodios.routes")

// MIDDLE
app.use(morgan('dev'));
app.use(cors())
app.use(bodyParse.json())

// ROUTES
app.use('/', filmeRoutes)
app.use('/usuario', usuarioRoutes)
app.use('/episodio', episodioRoutes)

app.listen(8000, () => {
    console.log('Meu servidor esta funfando')
})