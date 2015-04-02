var consolidate = require('consolidate'),
    path = require('path'),
    mainController = require('./../controller/main');

module.exports = function(app) {
  //main page
  app.get('/', function(req, res, next) {
    mainController(function(err, data) {
      console.log(data.title);
      console.log(path.resolve(app.get('views'), '/main.' + app.get('view engine')));
      consolidate.react(path.resolve(app.get('views'), '/main.' + app.get('view engine')), {
        title : 'Example',
        base : path.resolve(app.get('views'), '/main.html')
      }, function(err, html) {
        res.send(html);
      })
    });
  });
};