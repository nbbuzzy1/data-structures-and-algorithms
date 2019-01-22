const numbers = [99, 44, 6, 2, 1, 5, 6]

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let smallestNumber = array[j]
        let largerNumber = array[i]
        array[i] = smallestNumber
        array[j] = largerNumber
      }
    }
  }
  // return array;
}
selectionSort(numbers)
console.log(numbers)