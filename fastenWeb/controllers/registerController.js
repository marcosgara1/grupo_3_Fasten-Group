const fs = require('fs');

let controlador = {
    register: function(req, res){
        res.render('register');
    },
    registerUser: function(req, res){
        
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: password, 
        }
        
        res.redirect('/');
    },
};

module.exports = controlador;
