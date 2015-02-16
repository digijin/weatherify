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
		date = new Date();
		dayDiff = date.getDay() - 1;
		monday = new Date(date.getFullYear(), date.getMonth(),date.getDate())
			.setDate(date.getDate() + dayDiff) / 1000;
		
		expect(time.format('monday')).to.be.a('number');
		expect(time.format('monday')).to.equal(monday);
	});
	it("should format 'today'", function(){
		date = new Date();
		today = new Date(date.getFullYear(), date.getMonth(),date.getDate()).getTime() / 1000;
		expect(time.format('today')).to.be.a('number');
		expect(time.format('today')).to.equal(today);
	});

	it("should return undefined if it cant match anything", function(){
		expect(time.format('the future!')).to.be.an('undefined');
	});

});