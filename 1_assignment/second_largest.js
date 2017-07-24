function secondLargest (array) {
  var biggest = array[0];
  var secondBiggest = array[1];
  for (var i = 1; i < array.length; i++) {
   if (array[i] > biggest) {
      secondBiggest = biggest;
      biggest = array[i];
    } else if (array[i] < biggest && array[i] > secondBiggest) {
      secondBiggest = array[i];    
    }
  }
  return secondBiggest;
}

function secondLargestwithoutIf (array) {
  array.sort((a, b) => a - b);
  return array[array.length - 2];
}