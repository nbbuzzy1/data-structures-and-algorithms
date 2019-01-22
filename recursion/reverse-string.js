//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let arr = str.split("");
  let newArr = []
  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  let answer = newArr.join("");
  return answer;
}

// reverseString('yoyo mastery')
//should return: 'retsam oyoy'

//Recursion
function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');