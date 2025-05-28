function pyramid(pattern, numOfRows, boolean) {
  let rows = [];

  for (let currentRow = 1; currentRow <= numOfRows; currentRow++) {
    let space = " ".repeat(numOfRows - currentRow);
    let printPattern = pattern.repeat(2 * currentRow - 1);

    let thisRow = `${space}${printPattern}`;

    if (boolean === false) {
      rows.push(thisRow);
    } else {
      rows.unshift(thisRow);
    }
  }

  let result = "\n" + rows.join("\n") + "\n";
  return result;
}

console.log(pyramid("p", 5, true));
console.log(pyramid("*", 4, false));
console.log("---");
console.log(pyramid("#", 3, true));
