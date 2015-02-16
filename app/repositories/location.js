q = require('q');
conf = require('../config');
apiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;


module.exports = {
	get: function(location){
		defer = q.defer();
		if(Array.isArray(location)){ // if its an array
			defer.resolve({
				lat:location[0], 
				lon:location[1]
			});
		}else{
			defer.resolve({
				lat:location.lat, 
				lon:location.lon
			});
		}

		return defer.promise;
	}
};