const userData = require('../models/user');
const bcrypt = require('bcrypt');

let controlador = {

    formLogin : function (req, res) {
        
        res.render('formularioLogin');
    },

    processLogin : function (req, res) {
        
        let users = userData.findAll();

        for (let i = 0; i < users.length; i++){
            
            if (req.body.email == users[i].email && bcrypt.compareSync(req.body.password, users[i].password)){
                res.redirect('/')
            }
        }

        res.redirect('/users/login');
    },

    formRegister : function (req, res) {
       
        res.render('formularioRegistro');
    },

    register : function (req, res) {

        let user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            foto : req.files[0].filename
        }

        userData.create(user);

        res.redirect('products'/*, { user : user }*/);
    }

    
};

module.exports = controlador;
