
var passLowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var passUpperCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var passNumber= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passCharacters=  [ "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "^", "|",]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
  return;
}
var password= "";

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
      // not wrorking
          // if ((passLowerCase && passUpperCase && passNumber && passCharacters) === false) {
          //   alert ("You must pick at least 1 criteria");
          //   return generatePassword();
          // }
      }
// trying to generate password
  for (var i=0; i <passLength; i) {
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
  password= password.slice (0,passLength);
  // console.log (password);
 }
} //end generate loop 

    function randomLower () {
      var randomPassword = passLowerCase [Math.floor(Math.random() * passLowerCase.length)];
      // console.log (randomPassword);
      return randomPassword; 
    }

    function randomUpper() {
      var randomPassword = passUpperCase [Math.floor(Math.random() * passUpperCase.length)];
      // console.log (randomPassword);
      return randomPassword;
    }
    
    function randomNumber() {
      var randomPassword = passNumber [Math.floor(Math.random() * passNumber.length)];
      // console.log (randomNumber);
      return randomPassword; 
    }
    function randomSymbol() {
      var randomPassword = passCharacters [Math.floor(Math.random() * passCharacters.length)];
      // console.log (randomSymbol);
      return randomPassword;
    }
  generateBtn.addEventListener("click", writePassword);


    // __________________________________________________________________________________
    // MY hard work and mistakes*************************************************
    // 
  // Write password to the #password input
  // function writePassword( passLength, passLowerCase, passUpperCase, passNumber, passCharacters) {
    // var password = generatePassword();
    // console.log ('writePassword');
  // }


  // promptMe (writePassword (passLength, passLowerCase, passUpperCase, passNumber, passCharacters))

    //
// maybe write array 


    // function randomLower () {
    //   passLowerCase= 'abcdefghijklmnopqrstuvwxyz';
    //   var randomPassword= '';
    //   var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
    //   passLowerCase.substring(randomGenerate, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }

    // passLowerCase [0];
    // console.log (passLowerCase);

    // function randomUpper () {
    //   passLowerCase= 'ABCDEFGHIJKLMNOPQRSTUVWZYZ';
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passLowerCase.length);
    //   passUpperCase.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }

  // function randomNumber () {
    //   passNumber= '0123456789';
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passNumber.length);
    //   passNumber.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }


   // function randomSymbol () {
    //   passCharacters= " !'#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    //   var randomPassword; "";
    //   var randomGenerate = Math.floor(Math.random() * passCharacters.length);
    //   passCharacters.substring(randomPassword, +1);
    //   console.log (randomPassword);
    //   return randomPassword;
    //   console.log (randomPassword);
    // }

     // function to general char. NOT SURE???????????????????
    //  function general(chars) {
    //   var randomGenerate = Math.floor(Math.random() * chars.length);
    //       chars.substring(randomGenerate, +1);
    //       console.log (randomPassword);
    //       return randomPassword;
    //  }


// need to use a combination of conditionals, arrays, and for loops
  // loop
  // loop to generate password characters

  // var charLength;
  // for (let i = 0; i < charLength; i++) {
  //   var finalRandomPassword= [Math.floor(Math.random() * Math.floor(chars.length))];
  //   console.log (finalRandomPassword);
  // }
  // return finalRandomPassword;
  // console.log (finalRandomPassword);

    // added variables for the for loop
    // var chars= randomLower +randomUpper+ randomNumber +randomSymbol;
    // finalRandomPassword= ''

// DO I NED THIS?
    // function writePassword () {
    //  var passwordText = document.querySelector("#password");
    //   passwordText.value = password;

    //   function writePassword() {
    //     var password = generatePassword();
    //     var passwordText = document.querySelector('#password');
    //     passwordText.value = password;
    //   }
    //   console.log (writePassword)

      // need help to write  call back 
      // function generatePassword(password) {
        // return;
      // }
      
  // 

    // const typesCount = passLength +passLowerCase +passUpperCase + passNumber +passCharacters;
    // console.log ('typesCount');

    // const typesArray = [passLength, passLowerCase, passUpperCase, passNumber, passCharacters];
    // console.log ('typesArray');


    
  
  

  
  // not sure if i need it at end again. i have in the beginning
// Write password to the #password input



// Add event listener to generate button


//