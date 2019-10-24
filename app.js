var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
let passport = require('passport');
const configurePassport = require("./passport");
const session = require("express-session")

// let SamlStrategy = require('passport-saml').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pagesRouter = require('./routes/pages');
var authRouter = require('./routes/auth');

var app = express();
app.use(cors());

configurePassport();

app.use(session({
  secret: 'meme123',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/auth', authRouter);



app.use((req, res, next) => {
  if (!req.user)
  res.redirect("/auth")
  else
  next();
})



app.use(express.static(path.join(__dirname, 'client/BlueTasksNG')));
app.use(express.static(path.join(__dirname, 'client/404page')));

// app.use(express.static(path.join(__dirname, 'client')));



// app.use('/users', usersRouter);


app.use('/api', indexRouter);
app.use('/', pagesRouter);





// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});



// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  // res.send('404 feels bad');
  res.sendFile(path.join(__dirname, 'client/404page/error.html'));
  // app.use(express.static(__dirname,'404page'));
});

// app.get('*', function(req, res){
//   res.send('what???', 404);
// });

module.exports = app;
