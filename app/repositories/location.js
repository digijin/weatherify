q = require('q');
conf = require('../config');
apiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;


module.exports = {
	get: function(location){
		def = q.defer();
		if(Array.isArray(location)){ // if its an array
			def.resolve({
				lat:location[0], 
				lon:location[1]
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