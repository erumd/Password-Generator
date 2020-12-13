// var passLength= prompt ("How long do you want your password to be? Pick between 8- 128 characters");


// 1st way stack overflow
// document.querySelector ("#generate").addEventListener('click', function ()) {
//   var passLength = prompt("How long do you want your password to be? Pick between 8- 128 characters");
//   alert (passLength);
// }

// 2nd way 
document.querySelector('#generate').addEventListener('click', promptMe);

function promptMe() {
    var passLength = prompt("How long do you want your password to be? Pick between 8- 128 characters");
    alert (passLength);
}

// prompt2 Character types to include in the password
// Choose lowercase, uppercase, numeric, and/or special characters
function promptMe() {
    var passLowerCase = prompt("Do you want lower case in your password?");
    alert (passLength);
}

function promptMe() {
  var passUpperCase = prompt("Do you want UPPER case in your password?");
  alert (passLength);
}

function promptMe() {
  var passUpperCase = prompt("Do you want numbers in your password?");
  alert (passLength);
}

function promptMe() {
  var passUpperCase = prompt("Do you want special characters in your password?");
  alert (passLength);
}

console.log (promptMe);

// tutor help
// document.getElementById("generate").addEventListener("click", function(
//   prompt= "Choose a length of at least 8 characters and no more than 128 characters" )

// prompt1
// click= prompt ("Choose a length of at least 8 characters and no more than 128 characters");
// document.addEventListener("click", function(
//   click= prompt ("Choose a length of at least 8 characters and no more than 128 characters")
// ){




var randomLower
var randomUpper
var randomNumber
var randomSymbol








// Assignment Code
var generateBtn = document.querySelector("#generate")


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
