/*jshint -W030 */
q = require('q');
chai = require('chai');
chai.should()
expect = chai.expect;
chai.use(require("chai-as-promised"));
weather = require('../app/repositories/weather');

alcatraz = {
	arr: [37.8267,-122.423],
	obj: {lat: 37.8267, lon: -122.423},
	str: 'alcatraz'
};

describe('weather', function(){

	it('should be defined', function(){
		expect(weather).not.to.be.an('undefined');
		expect(weather.get).not.to.be.an('undefined');
	});

	it('should fetch weather for a location using an array', function(done){
		result = weather.get(alcatraz.arr);
		q.all([
			expect(result).to.eventually.be.an('object'),
			expect(result).to.eventually.have.property('latitude'),
			expect(result).to.eventually.have.property('longitude'),
			expect(result).to.eventually.have.property('currently')
		]).should.notify(done);
	});

});