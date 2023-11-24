const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const users = [];

dotenv.config();

exports.getUserByEmail = (email) => {
    return users.find((user) => user.email === email);
};

exports.getUserById = (id) => {
    return users.find((user) => user.id === id);
};

exports.createUser = ({ nome, email, senha, telefones }) => {
    const hashedPassword = bcrypt.hashSync(senha, 10);

    const newUser = {
        id: uuid.v4(),
        nome,
        email,
        senha,
        telefones,
        data_criacao: new Date(),
        data_atualizacao: new Date(),
        ultimo_login: new Date(),
    };

    users.push(newUser);

    return newUser;
};

exports.updateUser = (user) => {
    user.data_atualizacao = new Date();
};

exports.generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: '30m',
    });
    return token;
};