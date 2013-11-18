'use strict';

// Module dependencies.
var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();
var server = http.createServer(app);

// Express Configuration
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

// call backend
// require('./backend/app.js')(app, server);

// Development Configuration
app.configure('development', function() {
    console.log('---------------aaaaaa');
    console.log('---------------aaaaaa');
    console.log('---------------aaaaaa');
    // app.use(express.static(path.join(__dirname, '.tmp')));
    // app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.errorHandler());
});

// Production Configuration
app.configure('production', function() {
    console.log('---------------bbbbbbbb');
    console.log('---------------bbbbbbbb');
    console.log('---------------bbbbbbbb');
    // app.use(express.static(path.join(__dirname, 'dist')));
});

module.exports = app;

// server.listen(app.get('port'), function() {
//     console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
// });