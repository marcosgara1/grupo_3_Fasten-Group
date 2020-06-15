const userData = require('../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');

let controlador = {

    formLogin: function (req, res) {

        res.render('login');
    },

    processLogin: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()){            
            let users = userData.findAll(); 
            let usuarioALoguearse;           
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users[i].password)){                        
                        usuarioALoguearse = users[i];
                        break;
                    }
                }
            }

            if (usuarioALoguearse == undefined) {
                return res.render ('login', {errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            
            res.redirect('/products');

        } else {

            return res.render('login', { errors : errors.errors});
        }

    },

    formRegister: function (req, res) {

        res.render('register');
    },

    register: function (req, res) {

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let user = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                foto: req.files[0].filename
            }

            userData.create(user);

            res.redirect('products'/*, { user : user }*/);

        } else {

            res.render('register', { errors: errors.errors });

        }
    }


};

module.exports = controlador;
