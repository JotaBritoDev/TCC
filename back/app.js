var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var medicamentosRouter = require('./routes/medicamentos');
var conveniosRouter = require('./routes/convenios');
var medicosRouter = require('./routes/medicos');
var pacientesRouter = require('./routes/pacientes');
var consultasRouter = require('./routes/consultas');

var cors = require('cors')
var app = express();

app.disable('x-powered-by');
app.use(cors());

app.get('*', (req, res, next) => {
  if (req.app.get('env') === 'development') {
    next();
  }
  else if (req.headers['x-forwarded-proto'] != 'https') {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', indexRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/medicamentos', medicamentosRouter);
app.use('/api/v1/convenios', conveniosRouter);
app.use('/api/v1/medicos', medicosRouter);
app.use('/api/v1/pacientes', pacientesRouter);
app.use('/api/v1/consultas', consultasRouter);

app.get('/api-docs', function(req, res, next) {
  res.send('API DOCS');
});

app.all('/*', function(req, res, next) {
  res.sendFile('public/index.html', { root: __dirname });
});

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
