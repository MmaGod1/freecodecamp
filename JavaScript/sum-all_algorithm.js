function sumAll(numbersArray) {
  if (numbersArray[0] > numbersArray[1]) {
    numbersArray.reverse();
  }

  let sum = 0;
  for (let i = numbersArray[0]; i <= numbersArray[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 2]));
console.log(sumAll([1, 6]));
console.log(sumAll([4, 1]));
