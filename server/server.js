var express = require('express');
var path = require('path');
var logger = require('morgan');
var httpProxy = require('http-proxy');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config/config');
var mongoose = require('mongoose');

var proxy = httpProxy.createProxyServer();
var app = express();

// Connecting to the Database
mongoose.connect(config.database, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected to the Database");
  }
});

app.set('superSecret', config.secret); //secret variable

// configuration bodyParser and Morgan
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use("/node_modules", express.static(path.join(__dirname, '/node_modules')));

//using Api
var api = require('./api/api')(app, express);
app.use ('/api',api);


var isProduction = process.env.NODE_ENV === 'production';
var host = process.env.APP_HOST || 'localhost';
var port = isProduction ? 8080 : 3000;
var publicPath = path.resolve(__dirname, '..', 'public');









if (!isProduction) {
  // Any requests to localhost:3000/assets is proxied
  // to webpack-dev-server
  app.all(['/assets/*', '*.hot-update.json'], function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + host + ':3001'
    });
  });
}

app.use(express.static(publicPath));

// place your handlers here

app.get('/*', function(req, res) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
  console.log('express is running');
});
