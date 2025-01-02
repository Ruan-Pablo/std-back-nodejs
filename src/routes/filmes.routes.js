const express = require("express");
const router = express.Router();
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
router.post('/', (req, res) => {
    const body = req.body;
    res.json(body);
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