var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var productAddRouter = require('./routes/productAdd');
//var formularioRegistroRouter = require('./routes/formularioRegistro');
var clientRouter = require('./routes/client');
var productCartRouter = require('./routes/productCart');
//var loginRouter = require('./routes/formularioLogin');
//var detalleRouter = require('./routes/detalle');
var productsRouter = require('./routes/products');
var apiProductsRouter = require('./routes/api/products');
var apiUsersRouter = require('./routes/api/users');

var sessionMiddleware = require('./middlewares/sessionMiddleware');
var recordarmeMiddleware = require('./middlewares/recordarmeMiddleware');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/../public'));
app.use(session({ 
  secret: 'Secret!',
  resave: false,
  saveUninitialized: true,
}));
app.use(sessionMiddleware);
app.use(recordarmeMiddleware);
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/formularioLogin', loginRouter);
//app.use('/formularioRegistro', formularioRegistroRouter);
app.use('/client', clientRouter);
//app.use('/productCart', productCartRouter);
//app.use('/detalle', detalleRouter);
app.use('/products', productsRouter);
app.use('/api/products', apiProductsRouter);
/*app.use('/api/users', apiUsersRouter);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
