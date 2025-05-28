const questions = [
  {
    category: "JavaScript",
    question: "What does the Array.prototype.slice() method do?",
    choices: [
      "Removes elements from an array",
      "Returns a shallow copy of part of an array",
      "Adds new elements to an array",
    ],
    answer: "Returns a shallow copy of part of an array",
  },
  {
    category: "HTML",
    question: "Which HTML tag is used to define an unordered list?",
    choices: ["<ul>", "<ol>", "<li>"],
    answer: "<ul>",
  },
  {
    category: "CSS",
    question:
      "What does the flex-direction: row property do in a flex container?",
    choices: [
      "Stacks items vertically",
      "Aligns items in reverse order",
      "Lays items out horizontally from left to right",
    ],
    answer: "Lays items out horizontally from left to right",
  },
  {
    category: "Computer Networks",
    question: "What does DNS stand for?",
    choices: [
      "Digital Network System",
      "Domain Name System",
      "Dynamic Name Service",
    ],
    answer: "Domain Name System",
  },
  {
    category: "General Programming",
    question: "What is the main purpose of a function?",
    choices: [
      "To declare variables",
      "To loop through data",
      "To group reusable code blocks",
    ],
    answer: "To group reusable code blocks",
  },
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// Test
const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
console.log("Question:", question.question);
console.log("Choices:", question.choices);
console.log("Computer's Choice:", computerChoice);
console.log(getResults(question, computerChoice));
