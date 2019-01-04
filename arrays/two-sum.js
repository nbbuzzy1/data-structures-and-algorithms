const nums = [2, 7, 11, 15];
const target = 26;
let indices = []

const twoSum = (array) => {
  for (let i = 0; i < nums.length; i ++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices = [i, j]
        return indices
      }
    }
  }
}

twoSum(nums)