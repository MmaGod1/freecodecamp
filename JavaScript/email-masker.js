function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  let mask =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1] +
    domain;
  return mask;
}

let email = "mmadot@gmail.com";

console.log(maskEmail(email));
