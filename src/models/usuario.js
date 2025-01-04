const mongoose = require('mongoose')
// definição da estrutura
const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String, 
    senha: String
})

module.exports = Usuario