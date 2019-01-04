// Given 2 arrays, create a function that let's a user know (true/false) whether there are common items

// 2 paramaters - arrays
// return true or false
// How large is the array going to get?
// Most efficient function?

//nested loop solution
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['r', 'y', 'x'];

const containsCommonItem = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containsCommonItem(arr1, arr2);
//O(a*b) (because different sizes)



const containsCommonItem2 = (arr1, arr2) => {
  // loop through first array and create object where properties equal items in the array

  let map = {};
  for (let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true;
    }
  }
    // loop through second array and check if item in second array exists on created object
  for (let j=0; j < arr2.length; j++) {
    if(map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(arr1, arr2)
//O(a + b)

const containsCommonItem3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(arr1, arr2)
//O(n)