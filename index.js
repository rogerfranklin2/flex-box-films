var app = require('express')();
var exphbs  = require('express-handlebars');
hbs = exphbs.create({ /* config */ });

var request = require('request');

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var http = require('http').Server(app);

app.get('/', function(req, res){

request({
  method: 'GET',
  url: 'http://private-09d29-themoviedb.apiary-mock.com/3/movie/popular',
  headers: {
    'Accept': 'application/json'
  }}, function (error, response, body) {

    res.render('index', { movies : JSON.parse(body)});
  });

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
