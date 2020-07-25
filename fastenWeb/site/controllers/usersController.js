const userData = require('../models/user');
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');
const { urlencoded } = require('express');


let controlador = {


    formLogin: function (req, res) {

        res.render('login', {errors: {}, body: {}});
    },

    processLogin: function (req, res) {

        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render('login', {errors : errors.mapped(), body: req.body});
        }

        if (req.body.recordarme) {
            res.cookie('recordarUsuario', req.body.email, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90) });
        }

        req.session.logeado = true;
        res.locals.logeado = true;
        req.session.userEmail = req.body.email;

        return res.redirect('profile');
    },

    formRegister: function (req, res) {

        res.render('register', {errors:{}, body: {}});
    },

    register: function (req, res) {

        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render('register', {errors : errors.mapped(), body: req.body});
        } else {

        let foto = '';

        if (req.file) {
            foto = req.file.filename;
        }

        console.log(req.file);

        let client = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 2),
            foto: foto
        }

        db.Cliente.create(client)
            .then(function (userLogueado) {

                if (req.body.recordarme) {
                    res.cookie('recordarUsuario', req.body.email, { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90) });
                }

                req.session.logeado = true;
                res.locals.logeado = true;
                req.session.userEmail = req.body.email;

                return res.redirect('/profile', { userLogeado: userLogeado });
            })
            .catch(function (errors) {
                console.log(errors);
                return res.redirect('/register')
            })

        }

    },

    profile: function (req, res) {

        let user = req.session.userEmail;

        db.Cliente.findOne({
            where: {
                email: {
                    [Op.like]: user
                }
            }
        })
            .then(function (userLogeado) {
                return res.render('profile', { userLogeado: userLogeado });
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    formEditProfile: function (req, res) {



        let user = req.session.userEmail;

        db.Cliente.findOne({
            where: {
                email: {
                    [Op.like]: user
                }
            }
        })
            .then(function (userLogeado) {
                return res.render('formEditProfile', { userLogeado: userLogeado });
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    editProfile: function (req, res) {

        let user = req.session.userEmail;

        let foto = '';

        if (req.file) {
            foto = req.file.filename;
        }

        db.Cliente.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            //email: req.body.email,
            foto: foto
        }, {
            where: {
                email: user
            }
        })
        res.redirect('users/profile');
    }

};

module.exports = controlador;
