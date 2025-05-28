const lunches = [];

function addLunchToEnd(lunches, string) {
  lunches.push(string);

  console.log(`${string} added to the end of the lunch menu.`);

  return lunches;
}

function addLunchToStart(lunches, string) {
  lunches.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);

  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length == 0) {
    console.log("No lunches to remove.");
  } else {
    let popped = lunches.pop();
    console.log(`${popped} removed from the end of the lunch menu.`);
  }

  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length == 0) {
    console.log("No lunches to remove.");
  } else {
    let shifted = lunches.shift();
    console.log(`${shifted} removed from the start of the lunch menu.`);
  }

  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length == 0) {
    console.log("No lunches available.");
  } else {
    let selected = lunches[Math.floor(Math.random() * lunches.length)];
    console.log(`Randomly selected lunch: ${selected}`);
  }
}

function showLunchMenu(lunches) {
  if (lunches.length == 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));

console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
