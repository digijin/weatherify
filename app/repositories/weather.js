q = require('q');
conf = require('../config');
apiKey = process.env.FORECAST_APIKEY || conf.weather.apiKey;
location = require('./location');
request = require('request');

makePath = function(params){
	return 'https://api.forecast.io/forecast/'+apiKey+'/'+params;
};


module.exports = {
	get: function(loc, time){
		defer = q.defer();

		location.get(loc).then(function(loc){
			params = loc.lat + ',' + loc.lon;
			path = makePath(params);
			request(path, function(err, res, body){
				defer.resolve(JSON.parse(body));
			});
		});
		// request()

		return defer.promise;
	}
};