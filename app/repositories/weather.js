q = require('q');
conf = require('../config');
apiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;

module.exports = {
	get: function(location, time){
		defer = q.defer();
		defer.resolve({});
		return defer.promise;
	}
};