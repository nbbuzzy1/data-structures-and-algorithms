const containsDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(nums[i], nums[j])
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

containsDuplicate([1, 2, 3, 1])