var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//- Airbrake for errors
var airbrake = require('airbrake').createClient("133692", "e5ce8ef84f3887265469f8de7157f1e6");

// Controllers
var ContactController = require('./controllers/contact');
var FaqController = require('./controllers/faq');
var HomeController = require('./controllers/home');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(methodOverride('_method'));
app.use(airbrake.expressHandler());

// Static files
app.use(express.static(path.join(__dirname, 'public/css/bootstrap.min.css'), { maxAge: '1y'}));
app.use(express.static(path.join(__dirname, 'public/css/material-kit.min.css'), { maxAge: '30d'}));
app.use(express.static(path.join(__dirname, 'public/css/main.css'), { maxAge: '1d'}));
app.use(express.static(path.join(__dirname, 'public/js/main.min.js'), { maxAge: '1d'}));
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
