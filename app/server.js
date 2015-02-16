express = require('express');
app = express();
port = process.env.PORT || 3000;

fs = require('fs');


app.get('/', function(req,res){
	index = fs.readFileSync('app/views/index.html').toString();
	res.send(index);
});

app.get('/weather/:location/:time', require('./routes/weather'));

app.listen(port);