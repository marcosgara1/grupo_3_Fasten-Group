const userData = require('../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');


let controlador = {


    formLogin: function (req, res) {

        res.render('login');
    },

    processLogin: function (req, res) {

        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('login', {errors: errors.mapped(), body: req.body});
        }

        if (req.body.recordarme) {
            res.cookie('recordarUsuario', req.body.email, {expires: new Date(Date.now()+ 1000*60*60*24*90)});
        }

       req.session.logeado = true;
       res.locals.logeado = true;
       req.session.userEmail = req.body.email;

       return res.redirect('/');
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
                c_password: req.body.c_password,
                foto: req.files[0].filename
            }

            userData.create(user);

            //req.locals.logeado = true;
            req.session.logeado = true;
            req.session.userEmail = user.email;


            res.redirect('products');

        } else {

            res.render('register', { errors: errors.errors });

        }
<<<<<<< HEAD

    profile : (req,res) => {
        return res.send(res.locals);
    }

    }
=======
    },
>>>>>>> 032861d6c1d70d5b78c0a002d6dacfcce7ae9ade

    profile : function (req, res) {
        
        let users = userData.findAll();

       let user = users.find(function(usuario){
           return req.params.id == usuario.id
       });
       
        res.render('profile', { user : user });
    }


};

module.exports = controlador;
