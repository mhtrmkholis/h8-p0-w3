var tampung = "";

function balikString (string) {
  for (i = string.length -1; i >= 0; i--) {
    tampung = tampung + string[i];
  }
  return tampung;
}

console.log (balikString("hello world!"))