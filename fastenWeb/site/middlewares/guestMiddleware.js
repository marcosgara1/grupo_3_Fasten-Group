function guestMiddleware (req, res, next) {
    if (!req.session.logeado) {
       return res.redirect('/users/login');
    }

    next();
}

module.exports = guestMiddleware;