const textInput= document.getElementById("text-input");

const countChar = document.getElementById("char-count")

function countCharacters(input) {
 let count = input.target.value.length;
 
 if (count > 50) {
   input.target.value = input.target.value.slice(0, 50);
   count = 50
 }
 countChar.innerHTML = `Character Count: ${count}/50`;
 
 if (count => 50) {
   countChar.style.color = "red";
 }
}

textInput.addEventListener('input', countCharacters);

