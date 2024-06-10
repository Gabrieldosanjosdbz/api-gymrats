const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const login = require('../model/Login')

// Função para autenticar o login
exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Verifica se o usuário com o email fornecido existe no banco de dados
        const usuario = await login.findOne({ email });

        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Verifica se a senha fornecida corresponde à senha armazenada no banco de dados
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ message: 'Senha incorreta.' });
        }

        // Cria um token de autenticação JWT
        const token = jwt.sign({ id: usuario._id }, 'segredo', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
