require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var scraper = require('./services/news.service');
var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('*/1 * * * *', function(){
    console.log("refershing RSS");
    scraper.refershRSS();
});


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));
//app.use('/api/todos', require('./controllers/api/todo.controller')); (currently not working)
app.use('/getnews', require('./controllers/news.controller'));

app.use('/loginCSS', express.static('loginCSS'));
app.use('/loginJS', express.static('loginJS'));


// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});


