const database = require('../services/database')

const Usuario = require('../models/usuario') // per mite fazer operações de CRUD
const usuriosJSON = require('../data/usuario') 

const addUsers = async () => {
    try {
        for (let usuario of usuriosJSON){
            await new Usuario(usuario).save()
        }
        console.log('Usuarios inseridos !!')
    } catch (err) {
        console.log(err.message)
    }
}

addUsers()