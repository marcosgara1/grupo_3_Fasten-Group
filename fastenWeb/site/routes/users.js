const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { check, validationResult, body } = require('express-validator');
const fs = require('fs');
const userData = require('../models/user');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
let logDBMiddleware = require
//const db = require('./../database/models')



/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/users');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });*/

//configuro donde y como se van a llamar los archivos
const storage = multer.diskStorage({
  destination : (req, file, cb) => {
      const folder = 'public/img/users';
      //ojo debe de estar creada la carpeta en public
      cb(null, folder);
  },
  filename : (req, file, cb) => {
      //el nombre del archivo es interesante ya que debe ser un nombre unico y no reemplaze a otros archivos.
      return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }, 
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];
      const ext = path.extname(file.originalname);
      if (acceptedExtensions.includes(ext)){
          //si es correcto subo la imagen
          cb(null, true);
      } else {
          //aqui guardo la imagen en el body
          req.file = file;
          //le digo que no la suba
          cb(null, false);
      }
   }
});





const usersController = require('../controllers/usersController');
const { confirmPassword } = require('../models/user');


router.get('/login', authMiddleware, usersController.formLogin);

router.post('/login', authMiddleware, [

  check('email').isEmail().withMessage('Email inválido'),

  check('password').isLength({ min: 8 }).withMessage('La contraseña debe poseer al menos 8 caracteres'),

], usersController.processLogin)

router.get('/register', authMiddleware, usersController.formRegister);

router.post('/', authMiddleware,upload.single('foto'), [

  check('first_name').isLength({ min: 1 }).withMessage('Este campo debe estar completo'),

  check('last_name').isLength({ min: 1 }).withMessage('Este campo debe estar completo'),

  check('email').isEmail().withMessage('Debe ingresar un email válido'),
 
  body('email').custom(function (value) {

    let users = userData.findAll();
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == value) {
        return false;
      }
    }
    return true;
  }).withMessage('El email ya está registrado'),

  check('password').isLength({ min: 8 }).withMessage('La contraseña debe poseer al menos 8 caracteres'),

  check('password', 'Las contraseñas deben coincidir')
    .custom((value, { req }) => {
      return value === req.body.c_password
    }),

], usersController.register);

router.get('/profile', guestMiddleware,usersController.profile)

module.exports = router;
