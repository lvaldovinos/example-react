var express = require('express'),
    http = require('http'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    router = require('./router'),
    app = express(),
    server;

//set .html as the default extension
app.set('view engine', 'react');
app.set('views', __dirname + '/view');
//log request...
app.use(morgan('dev'));
//url encode and json parser
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
//router
router(app);
//create server...
server = http.createServer(app);
//listen on port 3000
server.listen(3000, function() {
  console.log('Server started on localhost:3000');
});