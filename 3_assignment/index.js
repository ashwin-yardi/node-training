var alphabetFrequency = require('./assignment_1_codes/alphbet_frequency.js');
var secondBiggest = require('./assignment_1_codes/second_largest.js');
var flatten = require('./assignment_1_codes/flatten.js');
var unflatten = require('./assignment_1_codes/unflatten.js');

var alphabetFrequencyParam = "A#sh4win";
var secondBiggestParam = [32, 12, 9, 10];
var flattenParam = { "i": { "am": { "not": { "so": { "flat": true, "unflat": false } } } } };
var unflattenParam = { 'i.am.not.so.flat': true, 'i.am.not.so.unflat': false };

var print = function (toBePrinted) {
	console.log(toBePrinted);
}

print(alphabetFrequency.calculateFrequencySimplerLogic(alphabetFrequencyParam));
print(secondBiggest.secondLargest(secondBiggestParam));
print(flatten.flatten(flattenParam));
print(JSON.stringify(unflatten.unflatten(unflattenParam)));