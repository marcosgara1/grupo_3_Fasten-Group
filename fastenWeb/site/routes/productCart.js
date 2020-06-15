const express = require('express');
const router = express.Router();

const productCartController = require('../controllers/productCartController');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', productCartController.productCart);

module.exports = router;