let controlador = {
    register: function(req, res){
        res.render('register');
    },
    registerUser: function(req, res){
        res.redirect('/');
    }
};

module.exports = controlador;
