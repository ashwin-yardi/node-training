module.exports = function (array) {
	if (!Array.isArray(array)) {
		return undefined;
	}
  array.sort((a, b) => a - b);
  return array[array.length - 2];
}