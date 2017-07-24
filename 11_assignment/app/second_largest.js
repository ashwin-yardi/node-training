module.exports = function (array) {
	if (!Array.isArray(array)) {
		throw new Error("Invalid Arguments");
	}
  array.sort((a, b) => a - b);
  return array[array.length - 2];
}