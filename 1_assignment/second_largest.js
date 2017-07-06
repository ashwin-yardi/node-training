function secondLargest (array) {
  var biggest = null;
  var secondBiggest = null;
  for (var i = 0; i < array.length; i++) {
    if (i == 0) {
      biggest = array[0];
      secondBiggest = biggest;
    }
    if (array[i] > biggest) {
      secondBiggest = biggest;
      biggest = array[i];
    } else if (array[i] < biggest && array[i] > secondBiggest) {
      secondBiggest = array[i];    
    }
  }
  return secondBiggest;
}
