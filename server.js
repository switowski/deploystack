var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//- Raven for sentry errors
var Raven = require('raven');
// Must configure Raven before doing anything else with it
Raven.config('https://8a3686ce39254721b1e3f19026165592:916a1c07587d4f0e8044db606a9f4494@sentry.io/142681').install();

// Controllers
var ContactController = require('./controllers/contact');
var FaqController = require('./controllers/faq');
var HomeController = require('./controllers/home');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);
// The request handler must be the first middleware on the app
app.use(Raven.requestHandler());
// The error handler must be before any other error middleware
app.use(Raven.errorHandler());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));

// Static files
app.use(express.static(path.join(__dirname, 'public/css/bootstrap.min.css'), { maxAge: '1y'}));
app.use(express.static(path.join(__dirname, 'public/css/material-kit.min.css'), { maxAge: '30d'}));
app.use(express.static(path.join(__dirname, 'public/css/main.css'), { maxAge: '14d'}));
app.use(express.static(path.join(__dirname, 'public/js/main.min.js'), { maxAge: '14d'}));
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.get('/', HomeController.index);
app.get('/faq', FaqController.index);
app.get('/contact', ContactController.index);

// Production settings
if (app.get('env') === 'production') {
  // For production use port 8080
  app.set('port', process.env.PORT || 8080);
  // Production error handler
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
