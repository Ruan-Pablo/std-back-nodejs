const express = require("express");
const router = express.Router();
const Filme = require('../models/filme')
// esse arquivo vai exportar todas as rotas
 
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