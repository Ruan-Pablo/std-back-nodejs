const database = require('../services/database')
const Filme = require('../models/filme') // permite fazer operações de CRUD
const Temporada = require('../models/temporada') // permite fazer operações de CRUD
const Episodio = require('../models/episodio') // permite fazer operações de CRUD

const addTemporadaEpisodio = async () => {
    try {
        const series = await Filme.find({tipo: "serie"}).select('_id') // procura serie no campo tipo e seleciona o id
        for (let serie of series){
            console.log(`FILME ${serie}----`)
            const numTemporadas = Math.floor(Math.random() * 5) + 1 // apenas para ilustrar e preencher com um numero aleatório
            for(let i = 1; i <= numTemporadas; i++){
                console.log(`inserido temporada ${i} de ${numTemporadas}`)
                const temporada = await new Temporada({
                    filme_id:serie, 
                    titulo: `Temporada ${i}`
                }).save()
                
                const numEpisodios = Math.floor(Math.random() * 5) + 1
                for(let x = 1; x <= numEpisodios; x++){
                    console.log(`inserido episodio ${x} de ${numEpisodios}`)
                    await new Episodio({
                        temporada_id: temporada._id, 
                        titulo: `Episodio ${x}`,
                        descricao: 'Lorem ispsum',
                        numero: x,
                        capa: 'https://picsum.photos/300/200' //img aleatoria
                    }).save()
                }
            }

        }
        console.log('Temporadas e episodios inseridos !!')
    } catch (err) {
        console.log(err.message)
    }
}

addTemporadaEpisodio()