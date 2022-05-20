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
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  console.log(numbers);

  // array for lowercase letters
  const lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  console.log(lettersLower);

  // array for lowercase letters
  const lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  console.log(lettersUpper);

  // array for special characters--can't get  ''' or '\' to work 
  const specialCharacter = [' ', '!', '_', '"', '#', ']', '[', '$', '%', '&', ')', '(', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '{','|', '~'];
  console.log(specialCharacter);

  // Asking the user what they want in their password using window confirm
  if (window.confirm("Do you want numbers in your password?")) {
    console.log(true);  
    // needs to generate number(s) if true
  }

 if (window.confirm("Do you want lowercase letters in your password?")) {
    console.log(true);
    // needs to generate lowercase letter(s) if true
  }

  if (window.confirm("Do you want uppercase letters in your password?")) {
      console.log(true);
      // needs to generate uppercase letter(s) if true
    }
   
  if (window.confirm("Do you want special characters in your password?")) {
    console.log(true);
    // needs to generate special character(s) if true
    } 

  // Using window prompt to ask about password length preference 
  let length = 0;

  // while loop 
  while (length < 8 || length > 128) {
    length = parseInt(prompt("How many characters long do you want your password?"));
  }

  console.log(length);

  // return letters, numbers, characters after while loop by using return and Math, detailed in 4 lines below
 // return numbers[Math.floor(Math.random()*numbers.length)];
 // return lettersLower[Math.floor(Math.random()*lettersLower.length)];
 // return lettersUpper[Math.floor(Math.random()*lettersUpper.length)];
 // return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);