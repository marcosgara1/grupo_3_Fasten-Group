const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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


router.get('/login', usersController.formLogin);

router.post('/login', usersController.processLogin)

router.get('/register', usersController.formRegister);

router.post('/', upload.any('foto'),usersController.register);

module.exports = router;
