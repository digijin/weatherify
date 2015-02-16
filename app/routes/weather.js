weather = require('../repositories/weather');
module.exports = function(req, res){
	console.log(req.params);
	weather.get(req.params.location, req.params.time).then(function(data){
		res.send(data);
	})
	
};