;


// tutor help
document.getElementById("generate").addEventListener("click", function(
  prompt= "Choose a length of at least 8 characters and no more than 128 characters" )

// prompt1
// click= prompt ("Choose a length of at least 8 characters and no more than 128 characters");
// document.addEventListener("click", function(
//   click= prompt ("Choose a length of at least 8 characters and no more than 128 characters")
// ){


// prompt2 Character types to include in the password
// Choose lowercase, uppercase, numeric, and/or special characters
var randomLower;
var randomUpper;
var randomNumber;
var randomSymbol; 








// Assignment Code
var generateBtn = document.querySelector("#generate")


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
