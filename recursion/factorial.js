const factorialRecursive = (number) => {
  if (number === 2) {
    return 2;
  }
  return number * factorialRecursive(number -1)
}
//O(n)

const factorialIterative = (number) => {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer;
}
//O(n)

factorialRecursive(5)