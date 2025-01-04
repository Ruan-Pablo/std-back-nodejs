const mongoose = require('mongoose')
// definição da estrutura
const Temporada = mongoose.model('Temporada', {
    filme_id: {
        type: mongoose.Types.ObjectId, // necessario para referencia uma chave estrangeira
        ref: 'Filme'
    },
    titulo: String
})

module.exports = Temporada