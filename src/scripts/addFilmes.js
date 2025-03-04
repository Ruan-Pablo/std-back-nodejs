const database = require('../services/database')

const Filme = require('../models/filme') // permite fazer operações de CRUD
const filmesJSON = require('../data/filme.json') 

const addFilmes = async () => {
    try {
        for (let filme of filmesJSON){
            console.log(`Inserindo ${filme.titulo}`)
            await new Filme(filme).save()
        }
        console.log('Filmes inseridos !!')
    } catch (err) {
        console.log(err.message)
    }
}

addFilmes()