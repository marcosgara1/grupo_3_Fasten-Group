function authMiddleware (req, res, next){
    if (req.session.logeado) {
        return res.redirect('/products')
    } 
    
    next();
}

module.exports = authMiddleware;