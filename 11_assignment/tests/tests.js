var expect = require('chai').expect;
var alphabetFrequency = require('../assignment_1_codes/alphbet_frequency.js');
var secondLargest = require('../assignment_1_codes/second_largest.js');
var flatten =  require('../assignment_1_codes/flatten.js');
var unflatten = require('../assignment_1_codes/unflatten.js');

describe("Test Suit for Assignment Functions.", function() {

	it("returns the object of number of alphabets in the word", function() {
		var count = alphabetFrequency("a!s@d$");
		let tempObject = { a: 1, s:1, d:1 };
		expect(count).to.deep.equal(tempObject);
	});

	it("returns a second highest number from the array", function() {
		var result = secondLargest([11, -10, 9, 10]);
		expect(result).to.equal(10);
	});

	it("returns a flattened json object", function() {
		let flattenedObject = flatten({ "i": { "am": { "not": { "so": { "flat": true, "unflat": false } } } } });
		let tempObject = { 'i.am.not.so.flat': true, 'i.am.not.so.unflat': false };
		expect(flattenedObject).to.deep.equal(tempObject);
	});

	it("returns an unflattened json object", function() {
		let unflatObject = unflatten({ 'i.am.not.so.flat': true, 'i.am.not.so.unflat': false });
		let tempObject = { "i": { "am": { "not": { "so": { "flat": true, "unflat": false } } } } };
		expect(unflatObject).to.deep.equal(tempObject);
	});

});