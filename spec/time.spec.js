/*jshint -W030 */
q = require('q');
chai = require('chai');
chai.should();
expect = chai.expect;

time = require('../app/helpers/time');

describe("time", function(){

	it("should be defined", function(){
		expect(time.format).not.to.be.an('undefined');
	});

	it("should format a day of the week", function(){
		expect(time.format('monday')).to.be.an('integer');
	});
	it("should format 'today'", function(){
		expect(time.format('today')).to.be.an('integer');
	});

});