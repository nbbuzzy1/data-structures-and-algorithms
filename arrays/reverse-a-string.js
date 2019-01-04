//Create a function that reverses a string:
//'Hi my name is Andrei' should be:
//'ierdna si eman vM iH'

const reverseString = (string) => {
  const array = string.split("")
  let revArray = []
  for (let i = array.length-1; i >= 0; i--) {
    revArray.push(array[i])
  }
  const revString = revArray.join("");
  console.log(revString)
}

reverseString('Hi my name is Andrei')

//solution
const reverse = (str) => {
   //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good'
  } 
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }
  return backwards.join('')
}
reverse('Hello')

//JavaScript Specific Method
const reverse2 = (str) => {
  return str.split('').reverse().join('')
}
reverse2('Another try')