function getIndexToIns(array, num) {
  let sortedArray = array.sort((a, b) => a - b);
  let index = sortedArray.findIndex(val => val >= num);
  return index === -1 ? sortedArray.length : index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([], 1));
