(function(){
	q = require('q');
	conf = require('../config');
	forecastApiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;
	location = require('./location');
	request = require('request');

	makeForecastPath = function(params){
		return 'https://api.forecast.io/forecast/'+forecastApiKey+'/'+params;
	};


	module.exports = {
		get: function(loc, time){
			defer = q.defer();

			location.get(loc).then(function(loc){
				params = loc.lat + ',' + loc.lon;
				path = makeForecastPath(params);
				request(path, function(err, res, body){
					defer.resolve(JSON.parse(body));
				});
			});
			return defer.promise;
		}
	};
})();