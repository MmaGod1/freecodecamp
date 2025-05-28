function generatePassword(passwordLength) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

let password = generatePassword(8);
console.log(`Generated password: ${password}`);

console.log(generatePassword(6));
console.log(generatePassword(12));
console.log(generatePassword(4));
console.log(generatePassword(16));
