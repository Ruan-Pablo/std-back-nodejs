const express = require('express');
const app = express();
const morgan = require('morgan')

// dev - ambiente de desenvolvimento: tem a ver com variavel de ambiente do node
app.use(morgan('dev'));



app.get('/', (req, res) => {
    // recuperar todos os registros
    res.json({mensagem: 'PEGAR TODOS OS REGISTROS'});
});

app.get('/:id', (req, res) => {
    // recuperar um registro
    const id = req.params.id;
    res.json({mensagem: `PEGAR REGISTRO COM ID: ${id}`});
});

// CRIAR UM REGISTRO
app.post('/', (req, res) => {
    const body = req.body;
    // na proxima vai ter esse body tratado
    res.json({mensagem: 'CRIAR REGISTRO'});
})
// ATUALIZAR
app.put('/:id', (req,res) => {
    const id = req.params.id;
    res.json({mensagem: `ATUALIZAR O REGISTRO COM ID: ${id}`})
})
// APAGAR
app.delete('/:id', (req, res)=>{
    const id = req.params.id;
    res.json({mensagem: `DELETAR O REGISTRO COM ID: ${id}`})
})

app.listen(3000, () => {
    console.log('Meu servidor esta funfando')
})