var expect = require('chai').expect;
var alphabetFrequency = require('../app/alphbet_frequency.js');
var secondLargest = require('../app/second_largest.js');
var flatten =  require('../app/flatten.js');
var unflatten = require('../app/unflatten.js');

describe("Test Suite for Assignment Functions.", function() {

	describe("AlphabetFrequency function", function() {
		it("should return the object of number of alphabets in the word", function() {
			const count = alphabetFrequency("a!s@d$");
			const tempObject = { a: 1, s: 1, d: 1 };
			expect(count).to.deep.equal(tempObject);
		});
		it("should return an empty object when an empty string is passed as an argument", function() {
			const emptyObject = alphabetFrequency("");
			expect(emptyObject).to.deep.equal({ });
		});
		it("should throw an error when argument is undefined", function() {
			expect(alphabetFrequency).to.throw;
		});
		it("should throw an error when passed argument is not of type String", function() {
			expect(() => {alphabetFrequency(2); }).to.throw;
		});
		it("should return an empty object when passed string contains only non-alphabets", function() {
			expect(alphabetFrequency("@@##")).to.deep.equal({ });
		});
	});

	describe("secondLargest function", function() {
		it("should return the second highest number from the array", function() {
			let result = secondLargest([11, -10, 9, 10]);
			expect(result).to.equal(10);
		});
		it("should throw an error when an empty array is passed as an argument", function() {
			expect(secondLargest).to.throw;
		});
		it("should throw an error when argument is undefined", function() {
			expect(secondLargest).to.throw;
		});
		it("should throw an error when passed argument is not of type Array", function() {
			expect(secondLargest(2)).to.throw;
		});
		it("should throw an error when passed array contains non-numbers", function() {
			let call = function() { secondLargest(["a", 2]) };
			expect(call).to.throw;
		});	
	});

	describe("flatten function", function() {
		it("should return a flattened json object", function() {
			const flattenedObject = flatten({ "i": { "am": { "not": { "so": { "flat": true, "unflat": false } } } } });
			const tempObject = { 'i.am.not.so.flat': true, 'i.am.not.so.unflat': false };
			expect(flattenedObject).to.deep.equal(tempObject);
		});
		it("should return an empty object when an empty object is passed as an argument", function() {
			expect(flatten({ })).to.deep.equal({ });
		});
		it("should throw an error when argument is undefined", function() {
			expect(flatten).to.throw;
		});
		it("should throw an error when passed argument is not a Json Object", function() {
			const args = "blah"
			expect(() => { flatten(args); }).to.throw;
		});	
	});

	describe("unflatten function", function() {
		it("should return an unflattened json object", function() {
			const unflatObject = unflatten({ 'i.am.not.so.flat': true, 'i.am.not.so.unflat': false });
			const tempObject = { "i": { "am": { "not": { "so": { "flat": true, "unflat": false } } } } };
			expect(unflatObject).to.deep.equal(tempObject);
		});
		it("should return an empty object when an empty object is passed as an argument", function() {
			expect(unflatten({ })).to.deep.equal({ });
		});
		it("should throw an error when argument is undefined", function() {
			expect(unflatten).to.throw;
		});
		it("should throw an error when passed argument is not a Json Object", function() {
			const args = "blah"
			expect(unflatten(args)).to.throw;
		});
	});
});