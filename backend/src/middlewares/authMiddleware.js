const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization');

    // Verificar se o token está presente
    if (!token) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    try {
        // Verificar e decodificar o token
        const decoded = jwt.verify(token.replace('Bearer ', ''), 'secretpassword');
        req.user = authService.getUserById(decoded.id);

        next();
    } catch (error) {
        res.status(401).json({ mensagem: 'Sessão inválida' });
    }
};
