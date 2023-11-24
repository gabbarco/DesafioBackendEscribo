const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Rota para cadastro (sign up)
router.post('/signup', authController.signUp);

// Rota para autenticação (sign in)
router.post('/signin', authController.signIn);

// Rota para buscar usuário
router.get('/user', authMiddleware.authenticate, authController.getUser);

module.exports = router;
