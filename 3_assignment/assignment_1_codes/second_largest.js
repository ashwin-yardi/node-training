module.exports = function (array) {
  array.sort((a, b) => a - b);
  return array[array.length - 2];
}