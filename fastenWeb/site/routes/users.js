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


router.get('/login', /*guestMiddleware,*/ usersController.formLogin);

router.post('/login', [

  check('email').isEmail().withMessage('Email inválido'),

  check('password').isLength({min: 8}).withMessage('La contraseña debe poseer al menos 8 caracteres'),

],usersController.processLogin)

router.get('/register', guestMiddleware, usersController.formRegister);

router.post('/register', upload.single('avatar'), [

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

module.exports = router;
