const textInput= document.getElementById("text-input");

const countChar = document.getElementById("char-count")

function countCharacters(input) {
 let count = input.target.value.length;
 
 if (count > 50) {
   input.target.value = input.target.value.slice(0, 50);
   count = 50
 }
 countChar.innerText = `Character Count: ${count}/50`;
 
 if (count >= 50) {
   countChar.className = "error";
 } else if(count >= 40) {
   countChar.className = "warning";
 } else {
   countChar.className = "";
 }
}

textInput.addEventListener('input', countCharacters);

