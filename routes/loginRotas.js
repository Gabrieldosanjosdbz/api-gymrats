const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

// Rota para autenticação de login
router.post('/', loginController.login);

module.exports = router;
