const express = require('express');
const router = express.Router();

const formularioLoginController = require('../controllers/loginController');

router.get('/', formularioLoginController.login);

module.exports = router;