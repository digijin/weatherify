express = require('express');
app = express();
port = process.env.PORT || 3000;

path = require('path');
cons = require('consolidate');

// I could break this into views and router files, but its small enough.

app.engine('html',cons.underscore);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', function(req,res){
	res.render('index');
});

app.get('/weather/:location/:time?', require('./routes/weather'));

app.use(express.static(__dirname + '/public'));

app.listen(port);