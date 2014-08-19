var app = require('express')();
var exphbs  = require('express-handlebars');
hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var http = require('http').Server(app);

app.get('/', function(req, res){
  res.render('index');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
