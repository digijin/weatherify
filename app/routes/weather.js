weather = require('../repositories/weather');
url = require('url');
module.exports = function(req, res){
	json = typeof url.parse(req.url, true).query.json == "string";
	weather.get(req.params.location, req.params.time).then(function(data){
		if(json){
			res.send(data);
		}else{
			res.render("weather", data);
		}
	});
	
};