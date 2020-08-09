const db = require('./../database/models');

module.exports = async (req, res, next) => {

    res.locals.userLogeado = null;

    res.locals.logeado = false;

    if (req.session.userLogeado){

        res.locals.logeado = true;
        
        res.locals.userLogeado = req.session.userLogeado;
        
    }

    next();
}