const express = require("express");
const router = express.Router();
const Filme = require('../models/filme')
// esse arquivo vai exportar todas as rotas
 
router.get('/', (req, res) => {
    // recuperar todos os registros
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

router.get('/:id', (req, res) => {
    // recuperar um registro
    const id = req.params.id;
    res.json({mensagem: `PEGAR REGISTRO COM ID: ${id}`});
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
router.put('/:id', (req,res) => {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR O REGISTRO COM ID: ${id}`})
})
// APAGAR
router.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.json({mensagem: `DELETAR O REGISTRO COM ID: ${id}`})
})

// com isso ele exporta
module.exports = router