function maskEmail(email){
  let astrick = "*";
  let text = email.slice(0, email.indexOf("@"));
  let domain = email.slice(email.indexOf("@"));
  let firstAndLast = text.slice(0, 1) + text.slice(-1);
  let hide = text.slice(1, -1);
  return `${firstAndLast.slice(0,1)}${astrick.repeat(hide.length)}${firstAndLast.slice(1)}${domain}`
}

let email = "apple.pie@example.com";
// output will be like a*******@example.com
console.log(maskEmail(email))