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
//this funtion will need to be filled for the password to generate.
//it will need promts
//promt charlength text imput must be intiger, n0 less than 8 no more than 128.Going to need an if else statement
//confirm uppercase true/false
//confirm lowercase true/false
//confirm special char true/false
//confirm numbers true/false
//validate the promts true or false for password generation

}