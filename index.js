const express = require('express');
const app = express();

// /teste é a rota
app.get('/teste', (req, res) => {
    // regra de negocio
    console.log('achou')
    res.json({mensagem: 'Rota funcionando'});
});

app.listen(3000, () => {
    console.log('Meu servidor esta funfando')
})