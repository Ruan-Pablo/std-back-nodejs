const mongoose = require('mongoose')
// definição da estrutura
const Filme = mongoose.model('Filme', {
    titulo: String,
    tipo: String,
    capa: String,
    logo: String,
    thumb: String, 
    descricao: String,
    genero: Array,
    elenco: Array,
    cenas_momento: Array
})

module.exports = Filme