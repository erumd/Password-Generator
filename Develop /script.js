
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
// function generatePassword() {
  // Prompts and Confirm password guidelines 
  document.querySelector('#generate').addEventListener('click', generatePassword);
  function generatePassword() {
      var passLength = parseInt (prompt("How long do you want your password to be? Pick from 8- 128 characters"));
      // if else statement needs to go after passLength or will not work for within 8-128. 
      if (!Number.isInteger(passLength)) {
        alert ("You have to enter a number");
        // need return to main prompt so user does not have to go through the confirm messages
        return generatePassword();
      }
      if (passLength <8 || passLength >128 ) {
        alert ("Pick password length from 8-128 characters") 
        // need return to main prompt so user does not have to go through the confirm messages
        return generatePassword();
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

    //
    // function randomLower () {
    //   passLowerCase= 'abcdefghijklmnopqrstuvwxyz';
    //   var randomPassword= '';
    //   var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
    //   passLowerCase.substring(randomGenerate, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }
    // tutor shorten randomLower
    function randomLower () {
      passLowerCase= 'abcdefghijklmnopqrstuvwxyz';
      var randomPassword = general(passLowerCase);
      console.log (randomPassword);
    }

    // function randomUpper () {
    //   passLowerCase= 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
    //   passUpperCase.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }
    // tutor shorten randomUpper
    function randomUpper() {
      passUpperCase= 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
      var randomPassword = general (passUpperCase);
      console.log (randomPassword);
    }


    // function randomNumber () {
    //   passNumber= '0123456789';
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passNumber.length);
    //   passNumber.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }
    // tutor shorten randomNumber 
    function randomNumber() {
      passNumber= '0123456789';
      var randomPassword = general (passNumber);
      console.log (randomNumber);
      
    }
    // function randomSymbol () {
    //   passCharacters= " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passCharacters.length);
    //   passCharacters.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }
    // Tutor shorten randomSymbol
    function randomSymbol() {
      passCharacters= " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var randomSymbol = general (passCharacter);
      console.log (randomSymbol);
      
    }

     // function to general char. NOT SURE???????????????????
     function general(chars) {
      var randomGenerate = Math.floor(Math.random() * chars.length);
          chars.substring(randomGenerate, +1);
          console.log (randomPassword);
          return randomPassword;
     }

// need to use a combination of conditionals, arrays, and for loops
  // loop
  // loop to generate password characters
  var charLength;
  let i= 0
  for (let i = 0; i < charLength; i++) {
    var finalRandomPassword= [Math.floor(Math.random() * Math.floor(chars.length))];
    console.log[i];
  }
  // return finalRandomPassword;
  // console.log (finalRandomPassword);

    // added variables for the for loop
    var chars= randomLower +randomUpper+ randomNumber +randomSymbol;
    finalRandomPassword= ''




// DO I NED THIS?
    function writePassword () {
     var passwordText = document.querySelector("#password");
      passwordText.value = password;


      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
      }
      console.log (writePassword)

      // need help to write  call back 
      function generatePassword(password) {
      }
// trying to generate password
  for (var i=0; i <length; i) {
    if (passLowerCase=== true) {
      password +=(randomLower());
      i++;
    }
    if (passUpperCase=== true) {
      password += (randomUpper());
      i++;
    } 
    if (passNumber=== true) {
      password += (randomNumber());
      i++;
    } 
    if (passCharacters=== true) {
      password += (randomSymbol());
      i++;
    } 
  }

  passwordEl.textContent = password; 

    // const typesCount = passLength +passLowerCase +passUpperCase + passNumber +passCharacters;
    // console.log ('typesCount');

    // const typesArray = [passLength, passLowerCase, passUpperCase, passNumber, passCharacters];
    // console.log ('typesArray');


    
  
  

  
  // not sure if i need it at end again. i have in the beginning
// Write password to the #password input



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

}