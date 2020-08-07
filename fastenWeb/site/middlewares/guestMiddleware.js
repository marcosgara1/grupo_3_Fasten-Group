module.exports = function guestMiddleware (req, res, next) {

	if (!req.session.logeado) {
    
		return res.redirect('/users/register');
  }
    
  next();  
}