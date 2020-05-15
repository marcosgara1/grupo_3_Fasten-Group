const express = require('express');
const router = express.Router();

const formularioRegistroController = require('../controllers/formularioRegistroController');

router.get('/', formularioRegistroController.register);
router.post('/', formularioRegistroController.registerUser);

module.exports = router;