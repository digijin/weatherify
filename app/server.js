cons = require('consolidate');
express = require('express');
path = require('path');

app = express();
port = process.env.PORT || 3000;

// I could break this into views and router files, but this file is small enough.

//views
app.engine('html',cons.underscore);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//routes
app.get('/', function(req,res){
	res.render('index');
});
app.get('/weather/:location/:time?', require('./routes/weather'));

//middleware
app.use(express.static(__dirname + '/public'));
app.get('*', require('./routes/404'));
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(port);