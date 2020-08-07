function authMiddleware (req, res, next){

    res.locals.logeado = false;

    if (req.session.logeado) {

        res.locals.logeado = true;
        
        return res.redirect('/products')
    } 
    
    next();
}

module.exports = authMiddleware;