// Assignment code here


//Make it so window only accepts password length between 8 and 128 
// Then make it so this input is taken and put into the generate password function 
//if they tell me a number and the length is between 8 and 128 then i need to 
//write logic that alspouses the inpout from the begining
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // Let user know password criteria 
var passwordCriteria = window.confirm ("Do you want this password to have capitals?");
var passwordChar= confirm("Do you want this password to have special characters?");
var numbers = confirm("Do you want this password to have numbers");
var passwordLower = confirm("Do you want this password to have lower case?");


// Have user enter a password length 
var passwordLength = window.prompt("Passowrds must be between 8 and 128 characters. Enter a number between 8 and 128");
//if statement that number is in the length paramater else alert its not correct 
if (passwordLength > 8 && passwordLength < 128) {
} else {
  window.alert("You must pick a number between 8 and 128!");
};
// ^ make sure that you fix this so they retry with new number 
  




// Get references to the #generate element
var string=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var stringUpper= string.toUpperCase();
var numeric=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters= ["!","@","$","&","^","*"];
var myArray = [];
var characters = [];
var complete;

if (passwordCriteria == true) {
  var randomIndex = Math.floor(Math.random() * string.length);
  myArray.push(string[randomIndex].toUpperCase());
  if (characters.length == 0){
  characters.push(string.map(function(x){return x.toUpperCase();}))};
  complete = characters[0];
  console.log(characters);
}
if (passwordChar == true) {
  var randomIndex = Math.floor(Math.random() * specialCharacters.length);
  myArray.push(specialCharacters[randomIndex]);
  if (characters.length == 0){
    characters.push(specialCharacters)
    complete = characters[0];
  };
  // push twice to even out chartacters
  complete = characters[0].concat(specialCharacters);
  complete = characters[0].concat(specialCharacters);
};

if (numeric == true) {
  var randomIndex = Math.floor(Math.random() * numeric.length);
  myArray.push(numeric[randomIndex]);
  if (characters.length == 0){
    characters.push(numeric)
    
  };
  complete = complete.concat(numeric);
  complete = complete.concat(numeric);
};
console.log(complete);
if (passwordLower == true) {
  var randomIndex = Math.floor(Math.random() * string.length);
  myArray.push(string[randomIndex]);
  if (characters.length == 0){
    characters.push(string)
    complete = characters[0];
  };
  complete = complete.concat(string);

};


var remaining = passwordLength - myArray.length;
for (i=0; i < remaining; i++) {
  var random = Math.floor(Math.random() * complete.length);
  myArray.push(complete[random]);
};

return myArray.join(""); 
};


// Write password to the #password input
function writePassword() {

  var password = generatePassword(); 


  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

