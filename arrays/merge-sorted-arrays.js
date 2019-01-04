//my solution
const mergeSortedArrays = (array1, array2) => {
  const mergedArray = array1.concat(array2)
  return mergedArray.sort(function(a, b){return a-b})
} 
mergeSortedArrays([0, 3, 4 ,21], [4, 6, 30])

//solution
const mergeSortedArrays2 = (array1, array2) => {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i]
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray
}

mergeSortedArrays2([0, 3, 4 ,21], [4, 6, 30])