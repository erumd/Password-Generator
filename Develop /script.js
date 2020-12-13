// Assignment Code
var generateBtn = document.querySelector("#generate");

// click button them get promot

click= prompt ("Choose a length of at least 8 characters and no more than 128 characters");

document.addEventListener("click", function(
  click= prompt ("Choose a length of at least 8 characters and no more than 128 characters")
){
// document.getElementById("demo").innerHTML;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
