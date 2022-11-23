// To do:
// Create prompts for password criteria
// Allow user to select what to include
// User can choose length of 8-128 characters
// Options: lower case, uppercase, numeric, special characters
// At least one character of each type selected must be included
// Password displayed in an alert or written to the page


// Assignment code here

// Variables:
var lowerCase = ['a,b,c,d,e,f,g,h,'].split(',')
var upperCase = ['A,B,C,D,E,F,G,H'].split(',')
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];


// Start of the function!
function passwordCreate() {

  // First, determine length
  var userLength = parseInt(
    prompt("Please enter a password length between 8-128.")
  );
  console.log(userLength);

  // Is it a numeric value?
  if (Number.isNaN(userLength)) {
    alert("Password must be a numberic value");
    return null;
  }
  // Make sure it's between 8-128
  if (userLength < 8 || userLength > 128) {
    alert("Password must be a numeric value between 8 and 128.");
    return null;
  }
  // Prompts (variables to ensure true/false):
  var hasLowerCase = confirm("Include lowercase letters? Y/N");
  var hasUpperCase = confirm("Include uppercase letters? Y/N");
  var hasNumber = confirm("Include numbers? Y/N");
  var hasSpecialCharacter = confirm("Include special characters? Y/N")

  // Make sure there is at least one selection made
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumber === false &&
    hasSpecialCharacter === false
  ) {
    alert('Must choose one char type')
    return null;
  }

  // Store the user inputs
  var charactersIncluded = {
    userLength: userLength,
    haslowerCase: haslowerCase,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter
  };
  console.log(charactersIncluded);
  return charactersIncluded;

  // Now we need to randomize arrays
  function randomizeArray(arr) {
    var randomI = Math.floor(Math.random() * arr.length);
    var radomChar = arr[randomI];
    return randomChar;
  }

  // Generate the actual password
  function generatePassword() {
    // New variable based on the user input
    var userOptions = charactersIncluded();
    // Array for results as they are generated
    var resultChar = [];
    // Array for the types of characters to include
    var possibleChar = ['a', 'b'];
    // Array to ensure characters of each type selected are included
    var guaranteedChar = [];
    // Make sure the user selected options
    if (!userOptions) return null;
    // These four statements add characters based on the user selections:
    if (userOptions.hasLowerCase) {
      possibleChar = possibleChar.concat(lowercase);
      guarantedChar.push(randomizeArray(lowercase));
    }
    if (userOptions.hasUpperCase) {
      possibleChar = possibleChar.concat(upperCase);
      guarantedChar.push(randomizeArray(upperCase));
    }
    if (userOptions.hasNumber) {
      possibleChar = possibleChar.concat(number);
      guarantedChar.push(randomizeArray(number));
    }
    if (userOptions.hasSpecialCharacter) {
      possibleChar = possibleChar.concat(specialCharacter);
      guarantedChar.push(randomizeArray(specialCharacter));
    }
    // for loop to iterate over the password length 
    for (var i = 0; i <= userLength; i++) {
      resultChar.push(possibleChar[Math.floor(Math.random() * possibleChar.length)]);
    }

    // for loop  to make sure at least one of each of the guaranteed characters mix in to the password
    for (var i = 0; i <= userLength; i++) {
      resultChar.push(guaranteedChar[Math.floor(Math.random() * guaranteedChar.length)]);
    }
    // return the result and make it a string to pass into writePassword
    return result.join("");
  }
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

