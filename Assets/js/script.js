// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
// function to generate password 
function generatePassword() {

  // array for numbers
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(numbers);

  // array for lowercase letters
  var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  console.log(lettersLower);

  // array for lowercase letters
  var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log(lettersUpper);

  // array for special characters--can't get  ''' or '\' to work 
  var specialCharacter = [' ', '!', '_', '"', '#', ']', '[', '$', '%', '&', ')', '(', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '{', '|', '~'];
  console.log(specialCharacter);

  // Define blank variable for password criteria to attach to
  let passwordReturn = [];

  // Created password pool to pull citeria into
  var passwordPool = [];

  // Asking the user what they want in their password using window confirm
  if (window.confirm("Do you want numbers in your password?") === true) {
    console.log(true);
    // Generate number(s) if true
    passwordPool += numbers;
  }

  if (window.confirm("Do you want lowercase letters in your password?") === true) {
    console.log(true);
    // Generates lowercase letter(s) if true
    passwordPool += lettersLower;
  }

  if (window.confirm("Do you want uppercase letters in your password?") === true) {
    console.log(true);
    // Generates uppercase letter(s) if true
    passwordPool += lettersUpper;
  }

  if (window.confirm("Do you want special characters in your password?") === true) {
    console.log(true);
    // Generates special character(s) if true
    passwordPool += specialCharacter;
  }

  // Using window prompt to ask about password length preference 
  let length = 0;

  // while loop 
  while (length < 8 || length > 128) {
    length = parseInt(prompt("How many characters long do you want your password? Password must be 8 to 128 characters long."));
  }

  console.log(length);

  // For loop 
  for (var i = 0; i < length; i++) {
    passwordReturn += passwordPool[Math.floor(Math.random()*passwordPool.length)];
  }

  return passwordReturn;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
