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


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/users');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage });

const usersController = require('../controllers/usersController');
const { confirmPassword } = require('../models/user');


router.get('/login', authMiddleware, usersController.formLogin);

router.post('/login', authMiddleware, [

  check('email').isEmail().withMessage('Email inválido'),

  check('password').isLength({ min: 8 }).withMessage('La contraseña debe poseer al menos 8 caracteres'),

], usersController.processLogin)

<<<<<<< HEAD
router.get('/register', guestMiddleware, usersController.formRegister);

router.post('/register', upload.single('avatar'), [
=======
router.get('/register', authMiddleware, usersController.formRegister);

router.post('/', upload.any('foto'), authMiddleware, [
>>>>>>> 032861d6c1d70d5b78c0a002d6dacfcce7ae9ade

  check('first_name').isLength({ min: 1 }).withMessage('Este campo debe estar completo'),

  check('last_name').isLength({ min: 1 }).withMessage('Este campo debe estar completo'),

  check('email').isEmail().withMessage('Debe ingresar un email válido')
  .custom(function(value){
    return debugger.User.findOne({where : {email : value}}).then(user => {
      if(user != null){
        return Promise.reject('Este mail ya está registrado');
      }
    })
  }),

<<<<<<< HEAD
  check('password').isLength({ min: 8 }).withMessage('La contraseña debe poseer al menos 8 caracteres'),

  body('c_password').custom((value,{req, loc, path}) => {
    if (value !== req.body.password) {
        return false;
    } else {
        return true;
    }
    }).withMessage('Los password deben coincidir')

], usersController.register);

router.get('/profile', authMiddleware, controller.profile)
=======
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

//router.get('/:id', usersController.profile);
>>>>>>> 032861d6c1d70d5b78c0a002d6dacfcce7ae9ade

module.exports = router;
