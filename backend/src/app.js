const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à sua API Restful Escribo!<br>Rotas Existentes:<br>/signin<br>/signup<br>/user');
});
// Rotas
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
