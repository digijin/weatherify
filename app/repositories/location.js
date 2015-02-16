(function(){
	q = require('q');
	conf = require('../config');
	locationApiKey = process.env.LOCATION_APIKEY || conf.location.apiKey;
	request = require('request');

	makeLocPath = function(location){
		return 'https://maps.googleapis.com/maps/api/geocode/json?key='+locationApiKey+'&address='+location;
	};

	module.exports = {
		get: function(location){
			def = q.defer();
			if(Array.isArray(location)){ // if its an array
				def.resolve({
					lat:location[0], 
					lon:location[1]
				});
			}else if(typeof location === "string"){
				path = makeLocPath(location);
				request(path, function(err,res,body){
					result = (JSON.parse(body));
					def.resolve({
						lat: result.results[0].geometry.location.lat,
						lon: result.results[0].geometry.location.lng
					});
				});
			}else{
				def.resolve({
					lat:location.lat, 
					lon:location.lon
				});
			}

			return def.promise;
		}
	};
})();