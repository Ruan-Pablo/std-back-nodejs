const mongoose = require('mongoose')
// definição da estrutura
const Filme = mongoose.model('Filme', {
    titulo: {
        type:String,
        required: true // campo obrigatorio - nn permite inserir um vazio
    },
    atores: Array,
    ano: Number,
    detalhes: Object,
    premiacoes: [Object]
})

module.exports = Filme