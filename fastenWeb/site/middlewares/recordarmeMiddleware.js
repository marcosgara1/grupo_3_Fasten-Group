module.exports = (req, res, next) =>{
    if (req.cookies['recordarUsuario']) {

        req.session.logeado = true;
        req.session.userEmail = req.cookies['recordarUsuario'];
   }

   next();
}