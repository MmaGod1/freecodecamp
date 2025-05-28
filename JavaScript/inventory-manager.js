const inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(
    (product) => product.name === productName.toLowerCase(),
  );
}

function addProduct(productObject) {
  const name = productObject.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += productObject.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name,
      quantity: productObject.quantity,
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(productName, productQuantity) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
  } else {
    if (inventory[index].quantity < productQuantity) {
      console.log(
        `Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`,
      );
    } else {
      inventory[index].quantity -= productQuantity;
      console.log(`Remaining ${name} pieces: ${inventory[index].quantity}`);

      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      }
    }
  }
}

console.log(addProduct({ name: "FLOUR", quantity: 5 }));
console.log(addProduct({ name: "FLOUR", quantity: 5 }));

console.log(findProductIndex("flour"));
console.log(findProductIndex("FloUr"));
console.log(findProductIndex("Flour"));

console.log(removeProduct("FLOUR", 5));
console.log(removeProduct("FLOUR", 5));

inventory.length = 0;
inventory.push({ name: "flour", quantity: 20 }, { name: "rice", quantity: 5 });
console.log(removeProduct("FLOUR", 5));

inventory.length = 0;
inventory.push({ name: "flour", quantity: 5 }, { name: "rice", quantity: 5 });
console.log(removeProduct("FLOUR", 10));
