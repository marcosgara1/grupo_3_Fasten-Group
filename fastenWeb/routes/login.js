const express = require('express');
const router = express.Router();

const productAddController = require('../controllers/loginController');

router.get('/', productAddController.login);

module.exports = router;