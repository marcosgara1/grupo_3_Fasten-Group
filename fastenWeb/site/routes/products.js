const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/productos');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })
   
  const upload = multer({ storage: storage });

const productsController = require('../controllers/productsController');


router.get('/', productsController.index);

router.get('/create', guestMiddleware, productsController.formCreate);

router.post('/', guestMiddleware, upload.any('foto'),productsController.create)

router.get('/:id', productsController.detail);

router.get('/:id/edit', guestMiddleware, productsController.formEdit);

router.put('/:id', guestMiddleware, upload.any('foto'),productsController.edit);

router.delete('/:id', guestMiddleware, productsController.delete);

router.get('/cart', guestMiddleware, productsController.cart);




module.exports = router;