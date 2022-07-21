// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = 8;
var poolArry = []
var lowerCaseArry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr = ['1','2','3','4','5','6','7','8','9','10',]
var symbolsArry = ['!', '@','#','$','%','^','&','*','(',')','{','}','[', ']', '+', '-', '<', '>']
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
 
function generatePassword(){
var thePassword = ''; 
// for loop to validates the password length
for (var i = 0; i < charLength; i++)
 {
  //generates a random number and pulls from the newly filled poolArry does this until i
  var randomIndex = Math.floor(Math.random() * poolArry.length);
  // stores new value from poolArray as password
  thePassword = thePassword + poolArry [randomIndex];
}
return thePassword;
}

function prompts(){
  poolArry = [];
  //default poolArry is empty when the user confirms a promt the new array will concat(or pool) into the poolArry hence why i call it poolArry. 
  //charLength will define how long the password will be.--
  //It must be a number, and range from 8-128 if these rules are violated the user will be alerted of his/her mistake and returns this function false.
  charLength = parseInt(prompt("Enter a number on how many characters do you want in your password? ( no less than 8 and no more than 128)"));
  if(isNaN (charLength) || charLength < 8 || charLength > 128) { alert('character length needs to be a number, 8 - 128 digits');
  return false; } 
 if( confirm('would you like lowercase letters in your password?')){
  poolArry = poolArry.concat(lowerCaseArry);
 }
 if( confirm('would you like uppercase letters in your password?')){
  poolArry = poolArry.concat(upperCaseArry);
 }
 if( confirm('would you like special characters in your password?')){
  poolArry = poolArry.concat(symbolsArry);
 }
 if( confirm('would you like uppercase letters in your password')){
  poolArry = poolArry.concat(numberArr);
 }
 return true;
}
