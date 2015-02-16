/*jshint -W030 */
q = require('q');
chai = require('chai');
chai.should();
expect = chai.expect;
chai.use(require("chai-as-promised"));
location = require('../app/repositories/location');

alcatraz = {
	arr: [37.8267,-122.423],
	obj: {lat: 37.8267, lon: -122.423},
	str: 'alcatraz'
};

describe('location', function(){

	it('should be defined', function(){
		expect(location).not.to.be.an('undefined');
		expect(location.get).not.to.be.an('undefined');
	});

	it('should get a location object using an array', function(done){
		result = location.get(alcatraz.arr);
		q.all([
			expect(result).to.eventually.be.an('object'),
			expect(result).to.eventually.have.property('lat'),
			expect(result).to.eventually.have.property('lon')
		]).should.notify(done);
	});
	it('should get a location object using a object', function(done){
		result = location.get(alcatraz.obj);
		q.all([
			expect(result).to.eventually.be.an('object'),
			expect(result).to.eventually.have.property('lat'),
			expect(result).to.eventually.have.property('lon')
		]).should.notify(done);
	});

	it('should throw errors when given bad input')

});