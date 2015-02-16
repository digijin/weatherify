q = require('q');
conf = require('../config');
apiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;

module.exports = {
	get: function(location, time){
		defer = q.defer();
		defer.resolve({
			latitude: 1,
			longitude: 1,
			currently: 1
		});
		return defer.promise;
	}
};