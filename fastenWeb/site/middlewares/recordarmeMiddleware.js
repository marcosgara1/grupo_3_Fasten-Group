const db = require('./../database/models');

module.exports = async (req, res, next) => {


   if(req.cookies['recordarUsuario']) {
       let userLogeado = await db.Cliente.findOne({
           where: {
               email: req.cookies['recordarUsuario']
            }});

            res.locals.logeado = true;
            res.locals.userLogeado = userLogeado;
            req.session.logeado = true;
            req.session.userLogeado = userLogeado;
   }

   next();
}