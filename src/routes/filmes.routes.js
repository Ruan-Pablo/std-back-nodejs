const express = require("express");
const router = express.Router();
const Filme = require('../models/filme')
const Temporada = require('../models/temporada')
const _ = require('underscore')
// esse arquivo vai exportar todas as rotas
 
router.get('/home', async (req, res) => {
    try {
        let filmes = await Filme.find({}) // pegar todos os filmes
        let finalFilmes = []

        // recuperando e relacionando as temporadas
        for (let filme of filmes){
            const temporadas = await Temporada.find({
                filme_id: filme._id
            }) // pegar todas as temporadas do filme em questão
            //_doc (problema com o mongoose) trazer o so o documento ao inves do obj inteiro
            const newFilme = {... filme._doc, temporadas} // cria outro obj com os filmes e as temporadas juntos 
            finalFilmes.push(newFilme)
        }

        // misturar os resultados (random) para deixar *dinamico*
        // para quando for carregar a capa ser sempre diferente
        finalFilmes = _.shuffle(finalFilmes) // mistura aleatoriamente

        // filme principal - capa do home
        const principal = finalFilmes[0]

        // separar em seções
        const secoes = _.chunk(finalFilmes, 5) // quebra em varios arrays
        // antes [1,2,3,4,5,6,7,8,9] - aplicando um chunk([],3)
        // dps [[1,2,3],[4,5,6],[7,8,9]]

        res.json({error:false, principal, secoes})

    } catch (err) {
        res.json({error:true, message: err.message})
        
    }
})

// recuperar TODOS os registros
router.get('/', async (req, res) => {
    try {
        const filmes = await Filme.find({}) // possivel de passar filtros nas {}
        res.json({error: false, filmes});
    } catch (err){
        res.json({error: true, message: err.message});
    }
});

// recuperar UM registro
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filme = await Filme.findById(id)
        res.json({error: false, filme});
    } catch (err) {
        res.json({error: true, message: err.message});
    }

});

// CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try{
        const filme = req.body;
        const response = await new Filme(filme).save() // enquanto isso nn executar nn paça pra linha abaixo
        res.json({erro: false, filme: response});
    } catch(err) {
        res.json({erro: true, message: err.message});
    }
})

// ATUALIZAR
router.put('/:id', async (req,res) => {
    try {
        const new_filme = req.body;
        const id = req.params.id;
        const filme_atualizado = await Filme.findByIdAndUpdate(id, new_filme) 
        res.json({error: false, filme: filme_atualizado})
    } catch (error) {
        res.json({erro: true, message: err.message});
    }
})
// APAGAR
router.delete('/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        const filme_deletado = await Filme.findByIdAndDelete(id)  
        res.json({error: false, filme_deletado})
    } catch (error) {
        res.json({erro: true, message: err.message});
    }
})

// com isso ele exporta
module.exports = router