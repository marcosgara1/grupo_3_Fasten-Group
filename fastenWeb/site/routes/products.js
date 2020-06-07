const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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

router.get('/create', productsController.formCreate);

router.post('/', upload.any('foto'),productsController.create), [
  check('name'),isLength({min:2}).withMessage('El nombre debe tener al menos 2 letras'),
  check('modelo'),isLength({min:2}).withMessage('El modelo debe tener al menos 2 letras'),
  check('clasificación'),isLength().withMessage('Debe seleccionar una familia de productos'),
  check('price'),isNumeric().withMessage('Debe establecer un precio'),

]


router.get('/:id', productsController.detail);

router.get('/:id/edit', productsController.formEdit);

router.put('/:id', upload.any('foto'),productsController.edit);

router.get('/:id/delete', productsController.delete);




module.exports = router;