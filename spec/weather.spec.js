/*jshint -W030 */
q = require('q');
chai = require('chai');
chai.should();
expect = chai.expect;
chai.use(require("chai-as-promised"));
weather = require('../app/repositories/weather');

alcatraz = {
	arr: [37.8267,-122.423],
	obj: {lat: 37.8267, lon: -122.423},
	str: 'alcatraz'
};

/* 
because this is auto-run each time I save any file 
I am a bit paranoid about hitting request limits
on both location and weather apis
even though they are kinda high
*/
describe('weather', function(){

	it('should be defined', function(){
		expect(weather).not.to.be.an('undefined');
		expect(weather.get).not.to.be.an('undefined');
	});

	it('should fetch weather for a location using an array', function(done){
		result = weather.get(alcatraz.arr);
		q.all([
			expect(result).to.eventually.be.an('object'),
			expect(result).to.eventually.have.property('latitude').that.equals(alcatraz.obj.lat),
			expect(result).to.eventually.have.property('longitude').that.equals(alcatraz.obj.lon),
			expect(result).to.eventually.have.property('currently') // cant check values because they change :/
		]).should.notify(done);
	});

	it("should fetch weather when specifying a string location and string time", function(done){
		this.timeout(5000);
		result = weather.get('sydney', 'today');
		q.all([
			expect(result).to.eventually.be.an('object'),
			expect(result).to.eventually.have.property('latitude'),
			expect(result).to.eventually.have.property('longitude'),
			expect(result).to.eventually.have.property('currently')
		]).should.notify(done);

	});


});