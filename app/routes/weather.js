weather = require('../repositories/weather');
url = require('url');
module.exports = function(req, res){
	json = typeof url.parse(req.url, true).query.json == "string";
	weather.get(req.params.location, req.params.time).then(function(data){
		console.log("json", json);
		if(json){
			res.send(data);
		}else{
			res.send("yoloswag240")
		};
	});
	
};