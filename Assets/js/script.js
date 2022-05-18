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
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  console.log(numbers);

// Asking the user what they want in their password using window confirm
  if (window.confirm("Do you want numbers?")) {
    console.log(true);
    // needs to generate number(s) if true
  }

  // Using window prompt to ask about password length preference 
  let length = 0;

  // while loop 
  while (length < 8 || length > 128) {
    length = parseInt(prompt("How long do you want your password?"));
  }

  console.log(length);
  // var password = "password"
  // return password
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
