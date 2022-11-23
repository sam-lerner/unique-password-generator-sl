// To do:
// Create prompts for password criteria
// Allow user to select what to include
// User can choose length of 8-128 characters
// Options: lower case, uppercase, numeric, special characters
// At least one character of each type selected must be included
// Password displayed in an alert or written to the page


// Assignment code here

// STUFF I NEED TO DEFINE FOR THIS TO WORK

// First, determine length
function passwordLength() {
    var userLength = prompt("Please enter a password length between 8-128.");
   if (userLength < 8 || userLength > 128){
    passwordLength();
   }
   else {
    console.log(userLength);
    lowerCase();
   }
  }
  // Invoke Password Length code
  passwordLength();
  
  // Lower case letters?
  function lowerCase() {
    var userLower = prompt("Include lowercase letters? Y/N");
    if (!userLower) {
      return;
    }
     userLower = userLower.toUpperCase()
     console.log(userLower)
  }
  const randomLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const randomUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomNumber = "0123456789";
  const randomCharacter = "!@#$%^&*()";
  var charactersIncluded = []
  // We need to use our results to create our prompt pool.
  function characterPool () {
    if (userLower = Y){
      var charactersIncluded = charactersIncluded.concat(randomLowerCase);
    }
  }
  
  // This will be the pool of characters available:
  var charactersIncluded = randomLowerCase.concat(randomUpperCase, randomNumber, randomCharacter);
  console.log(charactersIncluded);
  
  
  // Prompts:
  
  
  // prompt("Include uppercase letters? Y/N")
  // prompt("Include numbers? Y/N")
  // prompt("Include special characters? Y/N")
  
  //WE NEED A FOR HERE TO CREATE THE PASSWORD
  // function generatePassword () {
  // for (var i = 0; i <= userLength; i++)
  
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
  
  // Code for the copy button
  function copyFunction() {
    var copyPassword = document.getElementByID("password");
    copyPassword.select();
    // For mobile devices:
    copyPassword.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyPassword.value);
    alert("Copied the text: " + copyPassword.value);
  }