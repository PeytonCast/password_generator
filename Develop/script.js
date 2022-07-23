// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = 8;
//this is an empty array so we can concat or secendry arrays into one main bank which will be randomly selected from to form a password
var poolArry = []
//these are our arrays of characters
var lowerCaseArry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCaseArry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr = ['1','2','3','4','5','6','7','8','9','0']
var symbolsArry = ['!', '@','#','$','%','^','&','*','(',')','{','}','[', ']', '+', '-', '<', '>']


function writePassword() 
//generates password based off of selected prompts
{
  
  var correctPrompts = prompts();
  var passwordText = document.querySelector("#password");
 
  if (correctPrompts){
    var password = generatePassword();
    passwordText.value = password;
    //if the user rejects all prompts he/she will get an alert and no password will generate
    if(poolArry.length === 0){passwordText.value = ''; alert('Please select at least one character option and try again')}
  }
 
}

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
  

  //asks user if he/she would like lowercase and adds that information to poolArry
 if( confirm('would you like lowercase letters in your password?')){
  poolArry = poolArry.concat(lowerCaseArry);
 }
 //asks user if he/she would like uppercase and adds that information to poolArry
 if( confirm('would you like uppercase letters in your password?')){
  poolArry = poolArry.concat(upperCaseArry);
 }
 //asks user if he/she would like special characters and adds that information to poolArry
 if( confirm('would you like special characters in your password?')){
  poolArry = poolArry.concat(symbolsArry);
 }
 //asks user if he/she would like numbers and adds that information to poolArry
 if( confirm('would you like numbers in your password')){
  poolArry = poolArry.concat(numberArr);
 }
 
 return true;
}

