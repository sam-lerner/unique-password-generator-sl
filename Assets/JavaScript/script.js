// Assignment code here

// Variables:
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];


// Start of the function!
function generatePassword() {

  console.log("Here we go!");

  // Array for results as they are generated
  var setPassword = [];
  // Array for the types of characters to include
  var possibleChar = [];
  // Array to ensure characters of each type selected are included
  var guaranteedChar = [];
  // First, determine length
  var userLength = parseInt(
    prompt("Please enter a password length between 8-128.")
  );
  console.log(userLength);

  // Is it a numeric value?
  if (Number.isNaN(userLength)) {
    alert("Password must be a numeric value");
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

  // See the results
  console.log(hasLowerCase);
  console.log(hasUpperCase);
  console.log(hasNumber);
  console.log(hasSpecialCharacter);

  // Store the user inputs
  var charactersIncluded = {
    userLength: userLength,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter
  };
  randomizePassword();
  console.log(charactersIncluded);

  // Generate the actual password
  function randomizePassword() {

    // New variable based on the user input
    var userOptions = charactersIncluded;

    // Make sure the user selected options
    if (!userOptions) {
      return null;
    }

    // These four statements add characters based on the user selections:
    if (userOptions.hasLowerCase) {
      possibleChar = possibleChar.concat(lowerCase);
      setPassword.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    }


    if (userOptions.hasUpperCase) {
      possibleChar = possibleChar.concat(upperCase);
      setPassword.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    }
    if (userOptions.hasNumber) {
      possibleChar = possibleChar.concat(number);
      setPassword.push(number[Math.floor(Math.random() * number.length)]);
    }
    if (userOptions.hasSpecialCharacter) {
      possibleChar = possibleChar.concat(specialCharacter);
      setPassword.push(specialCharacter[Math.floor(Math.random() * specialCharacter.length)]);
    }
    console.log("Possible characters: " + possibleChar);
    console.log("Guaranteed characters: " + setPassword);

    // for loop to iterate over the password length 
    for (var i = 0; i < userLength; i++) {
      guaranteedChar.push(possibleChar[Math.floor(Math.random() * possibleChar.length)]);
    }

    // for loop  to make sure at least one of each of the guaranteed characters mix in to the password
    for (var i = 0; i < (userLength - 4); i++) {
      setPassword.push(guaranteedChar[Math.floor(Math.random() * guaranteedChar.length)]);
    }

    // Fisher-Yates shuffle
    function shuffleArray(setPassword) {
      let curId = setPassword.length;
      // There remain elements to shuffle
      while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = setPassword[curId];
        setPassword[curId] = setPassword[randId];
        setPassword[randId] = tmp;
      }
      return setPassword;
    }
    setPassword = shuffleArray(setPassword);



  }
  console.log(setPassword);

  // Convert from CSV to string
  password = setPassword.join("");
  // Spit out the result
  return password;
}

// STARTER CODE:
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