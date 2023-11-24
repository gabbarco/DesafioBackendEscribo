const authService = require('../services/authService');
const bcrypt = require('bcrypt');

exports.signUp = (req, res) => {
    const { nome, email, senha, telefones } = req.body;

    // Verificar se o e-mail já está cadastrado
    const userExists = authService.getUserByEmail(email);
    if (userExists) {
        return res.status(400).json({ mensagem: 'E-mail já existente' });
    }

    // Criptografar senha
    const hashedPassword = bcrypt.hashSync(senha, 10);

    // Criar usuário
    const newUser = authService.createUser({
        nome,
        email,
        senha: hashedPassword,
        telefones,
    });

    const token = authService.generateToken(newUser.id);

    res.status(201).json({
        id: newUser.id,
        data_criacao: newUser.data_criacao,
        data_atualizacao: newUser.data_atualizacao,
        ultimo_login: newUser.ultimo_login,
        token,
    });
};

exports.signIn = (req, res) => {
    const { email, senha } = req.body;

    // Verificar se o usuário existe
    const user = authService.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(senha, user.senha)) {
        return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' });
    }

    // Atualizar último login
    user.ultimo_login = new Date();
    authService.updateUser(user);

    const token = authService.generateToken(user.id);

    res.json({
        id: user.id,
        data_criacao: user.data_criacao,
        data_atualizacao: user.data_atualizacao,
        ultimo_login: user.ultimo_login,
        token,
    });
};

exports.getUser = (req, res) => {
    // O usuário é obtido do middleware de autenticação
    const user = req.user;

    res.json({
        id: user.id,
        nome: user.nome,
        data_criacao: user.data_criacao,
        data_atualizacao: user.data_atualizacao,
        ultimo_login: user.ultimo_login,
    });
};
