var coded = document.getElementById("coded");
var passwordDecodedPlace = document.getElementById("passwordDecodedPlace");
var decode = document.getElementById("decode");

// Add event listener to decoder button
decode.addEventListener("click", decodePassword);


//This isn't functioning
function decodePassword() {

  ///////////
  ///////////////
  ///////////////
  ///////////////
  ////////////////
  

    var passwordEncrypterPlaceholder = ["1ryyNdDH5dr","2K7dma6AfLc", "30JP4GEsx8L", "4yNuof3FojI", "5Dkadu8R3UA"];

    var passwordEncrypted = passwordEncrypterPlaceholder[Math.floor(Math.random()*5)]+encrypter.value+passwordEncrypterPlaceholder[Math.floor(Math.random()*5)]

    console.log(passwordEncrypted);

    passwordEncrypterPlace.value = passwordEncrypted;
  }
  