const userData = require('../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');


let controlador = {
    index : function (req, res) {

        return res.render('index');
    }
}

module.exports = controlador;