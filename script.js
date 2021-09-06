// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  const uppercase = document.getElementById("#uppercase");
  const lowercase = document.getElementById("#lowercase");
  const numbers = document.getElementById("#numbers");
  const length = document.getElementById("#length");
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersAdd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const passwordArray = [];

    passwordArray.push(letters);

    passwordArray.push(lettersLower);

    passwordArray.push(numbersAdd);

  console.log(passwordArray);


  for ( var i = 0; i <= length; i++ ) {
    var result = 'asdfA910 - This is a bogus passowrd, meant to be a placer.';
    
    //Figure out why charAt isn't working.
    //passwordArray.charAt(Math.floor(Math.random()*passwordArray.length));

}

return result;

};
