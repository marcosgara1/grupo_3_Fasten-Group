const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const productsController = require('../controllers/productsController');
const db = require('./../database/models');


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const folder = 'public/img/productos';
      cb(null, folder);
    },
    filename: (req, file, cb) => {
      return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const ext = path.extname(file.originalname);
      if (acceptedExtensions.includes(ext)) {
        cb(null, true);
      } else {
        req.file = file;
        cb(null, false);
      }
    }
  });




router.get('/', productsController.index);

router.get('/create', guestMiddleware, productsController.formCreate);

router.post('/', guestMiddleware, upload.single('foto'),
[
  check('name').isLength({min: 5}).withMessage('El campo Nombre debe poseer al menos 5 caracteres'),
  check('modelo').isLength({min: 1}).withMessage('El campo Modelo no puede estar vacío'),
  check('price').isInt({min: 1}).withMessage('El campo Precio debe ser numérico'),
  check('price').isLength({min: 1}).withMessage('El campo Precio no puede estar vacío'),
  check('clasificacion').isNumeric().withMessage('Debe seleccionar una clasificación'),
  check('description').isLength({min: 20}).withMessage('El campo Descripción debe poseer al menos 20 caracteres'),
  body('foto').custom((value, {req})=>{
    if(req.file != undefined){
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const ext = path.extname(req.file.originalname)
      return acceptedExtensions.includes(ext);
    }
    return false;
  }).withMessage('La foto debe tener alguno de los siguientes formatos: JPG, JPEG, PNG'), 

],productsController.create)

router.get('/:id', productsController.detail);

router.get('/:id/edit', guestMiddleware, productsController.formEdit);

router.put('/:id', guestMiddleware, upload.single('foto'),

[
  check('name').isLength({min: 5}).withMessage('El campo Nombre debe poseer al menos 5 caracteres'),
  check('modelo').isLength({min: 1}).withMessage('El campo Modelo no puede estar vacío'),
  check('price').isInt({min: 0}).withMessage('El campo Precio debe ser numérico'),
  check('description').isLength({min: 20}).withMessage('El campo Descripción debe poseer al menos 20 caracteres'),
  body('foto').custom((value, {req})=>{
    if(req.file != undefined){
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const ext = path.extname(req.file.originalname)
      return acceptedExtensions.includes(ext);
    }
    return false;
  }).withMessage('La foto debe tener alguno de los siguientes formatos: JPG, JPEG, PNG'), 

]

,productsController.edit);

router.delete('/:id', guestMiddleware, productsController.delete);

router.get('/cart', guestMiddleware, productsController.cart);




module.exports = router;