// Assignment code here

// Start of the function!
function generatePassword() {
  console.log("function generatePassword");

  // Variables:
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var characterCounter = 0
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

  // Store the user inputs
  var charactersIncluded = {
    userLength: userLength,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumber: hasNumber,
    hasSpecialCharacter: hasSpecialCharacter
  };

  console.log(charactersIncluded);

  // Generate the actual password

  // New variable based on the user input
  var userOptions = charactersIncluded;

  // These four statements add characters based on the user selections:
  if (userOptions.hasLowerCase) {
    possibleChar = possibleChar.concat(lowerCase);
    guaranteedChar.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
    characterCounter++;
  }

  if (userOptions.hasUpperCase) {
    possibleChar = possibleChar.concat(upperCase);
    guaranteedChar.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
    characterCounter++;
  }
  if (userOptions.hasNumber) {
    possibleChar = possibleChar.concat(number);
    guaranteedChar.push(number[Math.floor(Math.random() * number.length)]);
    characterCounter++;
  }
  if (userOptions.hasSpecialCharacter) {
    possibleChar = possibleChar.concat(specialCharacter);
    guaranteedChar.push(specialCharacter[Math.floor(Math.random() * specialCharacter.length)]);
    characterCounter++;
  }
  console.log("Character types: " + characterCounter)
  console.log("Possible characters: " + possibleChar);
  console.log("Guaranteed characters: " + guaranteedChar);

  // for loop to iterate over the password length 
  for (var i = 0; i < (userLength - characterCounter); i++) {
    guaranteedChar.push(possibleChar[Math.floor(Math.random() * possibleChar.length)]);
  }

  console.log("Before shuffle " + guaranteedChar)

  // Fisher-Yates shuffle
  function shuffleArray(guaranteedChar) {
    var curId = guaranteedChar.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      var randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = guaranteedChar[curId];
      guaranteedChar[curId] = guaranteedChar[randId];
      guaranteedChar[randId] = tmp;
    }
    return guaranteedChar;
  }
  
  setPassword = shuffleArray(guaranteedChar);

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