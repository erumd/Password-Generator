
var passLowerCase= 'abcdefghijklmnopqrstuvwxyz';
  var passUpperCase= 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
  var passNumber= '0123456789'
  var passCharacters=  " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Ask the user for details and return a string
function generatePassword() {
  // Prompts and Confirm password guidelines 
  // document.querySelector('#generate').addEventListener('click', promptMe);
  // function promptMe() {
      var passLength = parseInt (prompt("How long do you want your password to be? Pick from 8- 128 characters"));
      // if else statement needs to go after passLength or will not work for within 8-128. 
      if (!Number.isInteger(passLength)) {
        alert ("You have to enter a number");
        // need return promtMe so user does not have to go through the confirm messages
        return generatePassword();
      }
      if (passLength <8 || passLength >128 ) {
        alert ("Pick password length from 8-128 characters") 
        return promptMe();
      } else {
      var passLowerCase = confirm ('Do you want "lower case" in your password? Press OK to confirm and cancel to not include.');
      var passUpperCase = confirm ('Do you want "UPPER case" in your password? Press OK to confirm and cancel to not include. ');
      var passNumber = confirm ('Do you want "numbers" in your password? Press OK to confirm and cancel to not include.');
      var passCharacters = confirm ('Do you want "special characters" in your password? Press OK to confirm and cancel to not include.');
      }
  }
console.log (generatePassword);

  // var generateBtn = document.querySelector("#generate")
  // Write password to the #password input
  function writePassword( passLength, passLowerCase, passUpperCase, passNumber, passCharacters) {
    // var password = generatePassword();
    console.log ('writePassword');

  }

  // promptMe (writePassword (passLength, passLowerCase, passUpperCase, passNumber, passCharacters))

  

    // loop to generate password characters
    // for (let i = 0; i < passCharacters.length; i++) {
    //   console.log[i];
      
    // }

    // function to generate password in array 
    
    function randomLower () {
      passLowerCase= 'abcdefghijklmnopqrstuvwxyz';
      var randomPassword= '';
      var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
      passLowerCase.substring(randomGenerate, +1);
      console.log (randomPassword);
      return randomPassword;
      console.log (randomPassword);
    }
    

    function randomUpper () {
      passLowerCase= 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
      var randomPassword; "";
      var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
      passUpperCase.substring(randomPassword, +1);
      console.log (randomPassword);
      return randomPassword;
      console.log (randomPassword);
    }


    function randomNumber () {
      passNumber= '0123456789';
      var randomPassword; "";
      var randomGenerate = Math.floor(Math.random() * passNumber.length);
      passNumber.substring(randomPassword, +1);
      console.log (randomPassword);
      return randomPassword;
      console.log (randomPassword);
    }

    function randomSymbol () {
      passCharacters= " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var randomPassword; "";
      var randomGenerate = Math.floor(Math.random() * passCharacters.length);
      passCharacters.substring(randomPassword, +1);
      console.log (randomPassword);
      return randomPassword;
      console.log (randomPassword);
    }

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // const typesCount = passLength +passLowerCase +passUpperCase + passNumber +passCharacters;
    // console.log ('typesCount');

    // const typesArray = [passLength, passLowerCase, passUpperCase, passNumber, passCharacters];
    // console.log ('typesArray');

  function finalRandomPassword(params) {
    return randomPassword
  }


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword)


