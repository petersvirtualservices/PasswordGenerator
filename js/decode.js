var coded = document.getElementById("coded");
var passwordDecodedPlace = document.getElementById("passwordDecodedPlace");
var decode = document.getElementById("decode");

// Add event listener to decoder button
decode.addEventListener("click", decodePassword);


//This isn't functioning
function decodePassword() {

    var passwordArray = coded.value.split('');

    console.log(passwordArray);

    var passwordDecoderOne = passwordArray.splice(0,11);

    var passwordDecoderTwo = passwordArray.splice(-11);

    console.log(passwordDecoderOne);
    console.log(passwordDecoderTwo);

    passwordDecodedPlace.value = passwordArray;
  }
  