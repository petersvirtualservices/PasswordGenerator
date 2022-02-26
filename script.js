// Assignment Code
var generateBtn = document.querySelector("#generate");

//email password using bcrypt

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  result = password;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  const uppercase = document.getElementById("uppercase");
  const lowercase = document.getElementById("lowercase");
  const numbers = document.getElementById("numbers");
  const long = document.getElementById("long");
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersAdd = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var passwordArray = [];

  if (uppercase.checked == true && lowercase.checked == true && numbers.checked == true) {
    var passwordArray = [...letters, ...lettersLower, ...numbersAdd];
  }

  if (uppercase.checked == true && lowercase.checked == true && numbers.checked == false) {
    var passwordArray = [...letters, ...lettersLower];
  }

  if (uppercase.checked == true && lowercase.checked == false && numbers.checked == false) {
    var passwordArray = [...letters];
  }

  if (uppercase.checked == true && lowercase.checked == false && numbers.checked == true) {
    var passwordArray = [...letters, ...numbersAdd];
  }

  if (uppercase.checked == false && lowercase.checked == true && numbers.checked == true) {
    var passwordArray = [...lettersLower, ...numbersAdd];
  }

  if (uppercase.checked == false && lowercase.checked == true && numbers.checked == false) {
    var passwordArray = [...lettersLower];
  }

  if (uppercase.checked == false && lowercase.checked == false && numbers.checked == true) {
    var passwordArray = [...numbersAdd];
  }

  var resultPre = passwordArray.toString();
  var resultCommaRemoved = resultPre.split(',').join('');
  console.log(resultCommaRemoved);

  let resultArray = [];

  for (var i = 0; i < long.value; i++) {
    var resultEntry = resultCommaRemoved.charAt(Math.floor(Math.random() * resultCommaRemoved.length));
    resultArray.push(resultEntry);
  }


  var resultAlmost = resultArray.toString();
  var result = resultAlmost.split(',').join('');


  //console.log(resultCommaRemoved);
  console.log(resultArray);
  return result;

};
