const authController = require('../src/controllers/authController');
const authService = require('../src/services/authService');

jest.mock('../src/services/authService');

describe('Authentication Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Sign Up - Usuário ja Existente', () => {
        // Configurar mock para simular que o usuário já existe
        authService.getUserByEmail.mockReturnValueOnce({ email: "gabborges37@gmail.com", senha: "gabriel123" });

        const req = { body: { email: "gabborges37@gmail.com", senha: "gabriel123" } };
        const res = { status: jest.fn(), json: jest.fn() };
        authController.signUp(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ mensagem: 'E-mail já existente' });
    });

    //Espaço para mais testes
});
