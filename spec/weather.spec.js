/*jshint -W030 */
chai = require('chai')
expect = chai.expect;
chai.use(require("chai-as-promised"));
weather = require('../app/repositories/weather');

alcatraz = {
	arr: [37.8267,-122.423],
	obj: {lat: 37.8267, lon: -122.423},
	str: 'alcatraz'
}

describe('weather', function(){

	it('should be defined', function(){
		expect(weather).not.to.be.an('undefined');
		expect(weather.get).not.to.be.an('undefined');
	});

	it('should fetch weather for a location using an array', function(){
		expect(weather.get()).should.eventually.be.an('object');
	});

});