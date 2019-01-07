//Given an array [2, 1, 1, 2, 3, 4, 5]
//Should return 1

const testArray = [2, 1, 1, 2, 3, 4, 5]

const firstRecurringCharacter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]; 
      }
    }
    return undefined 
  }
} //O(n^2) time
//O(1) space

// firstRecurringCharacter(testArray)


const firstRecurringCharacter2 = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if(map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    console.log(map)
  }
  return undefined
} //O(n) time
//O(n) space

firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4])