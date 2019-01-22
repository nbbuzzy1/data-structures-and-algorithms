const testArray = [1, 7, 3, 5, 4]

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        //Swap numbers
        let temp = array[j];
        array[j] = array[j+1]
        array[j+1] = temp;
      }
    }
  }
}

bubbleSort(testArray)
console.log(testArray)