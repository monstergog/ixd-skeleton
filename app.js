
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var data = require("./data.json");

var index = require('./routes/index');
var add = require('./routes/add');
var results = require('./routes/results');
var history = require('./routes/history');
var help = require('./routes/help');
var menu = require('./routes/menu');
var del = require('./routes/delete');
var menuB = require('./routes/menuB');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/add%20purchase', add.view);
app.get('/results', results.view);
app.get('/history', history.view);
app.get('/help', help.view);
app.get('/menu', menu.view);
app.get('/history/delete', del.view);
app.get('/menuB',menuB.view);
// Example route

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
