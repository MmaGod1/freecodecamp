const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let flag = "";
  if (globalFlag.checked) flag += "g";
  if (caseInsensitiveFlag.checked) flag += "i";
  return flag;
}

function matchString() {
  const pattern = regexPattern.value;
  const flags = getFlags();
  const stringText = stringToTest.innerText.trim(); // Get the plain text

  const regexVal = new RegExp(pattern, flags);
  const matches = stringText.match(regexVal);

  if (matches) {
    const highlighted = stringText.replace(regexVal, (match) => {
      return `<span class="highlight">${match}</span>`;
    });

    stringToTest.innerHTML = highlighted;
    testResult.textContent = matches.join(", ");
  } else {
    testResult.textContent = "no match";
  }
}

testButton.addEventListener("click", matchString);
