var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var camisetasRouter = require('./routes/camisetas');
var pantalonesRouter = require('./routes/pantalones');
var contactoRouter = require('./routes/contacto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/camisetas', camisetasRouter);
app.use('/pantalones', pantalonesRouter);
app.use('/contacto', contactoRouter);

// armado de 3 rutas
app.get('/camisetas', function(req, res){
  res.send('Pagina de camisetas')
})

app.get('/pantalones', function(req, res){
  res.send('Pagina de camisetas')
})

app.get('/contacto', function(req, res){
  res.send('Pagina de camisetas')
})

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
