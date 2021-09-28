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
  const long = document.getElementById("#long");
  const letters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"].splice(0);
  const lettersLower = ["abcdefghijklmnopqrstuvwxyz"].splice(0);
  const numbersAdd = ["0123456789"].splice(0);
  const passwordArray = [];

    passwordArray.push(letters);
    passwordArray.push(lettersLower);
    passwordArray.push(numbersAdd);


  console.log(passwordArray);
  console.log(long);

  for (var i = 0; i <= passwordArray.length; i++) {
    var resultPre = passwordArray.toString();

    var result = resultPre.charAt(Math.floor(Math.random()*26));
    
  }

  return result;

};
