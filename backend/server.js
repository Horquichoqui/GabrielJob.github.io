const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
