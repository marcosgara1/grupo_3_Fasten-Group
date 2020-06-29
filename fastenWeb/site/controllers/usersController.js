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

       return res.redirect('profile');
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
                password: bcrypt.hashSync(req.body.password, 2),
                c_password: req.body.c_password,
                foto: req.files[0].filename
            }

            userData.create(user);

            req.session.logeado = true;
            res.locals.logeado = true;
            req.session.userEmail = user.email;


            res.redirect('profile');

        } else {

            res.render('register', { errors: errors.errors });

        }

    profile : (req,res) => {
        return res.send(res.locals);
    }

    },

    profile : function (req, res) {
        
        let user = req.session.userEmail;
        
        let users = userData.findAll();
       
       let userLogeado = users.find(function(usuario){
           return user == usuario.email;
       });
       
        res.render('profile', { userLogeado : userLogeado });
    }

};

module.exports = controlador;
