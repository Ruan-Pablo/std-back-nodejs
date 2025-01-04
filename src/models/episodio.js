const mongoose = require('mongoose')
// definição da estrutura
const Episodio = mongoose.model('Episodio', {
    temporada_id: {
        type: mongoose.Types.ObjectId, // necessario para referencia uma chave estrangeira
        ref: 'Temporada'
    },
    titulo: String, 
    descricao: String,
    numero: Number,
    capa: String
})

module.exports = Episodio