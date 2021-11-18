// Assignment code here

// I need to create arrays with characters, numbers, and letters (a string?), in uppercase and lowercase
var passNumbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passLowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passUpperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passSpecLetters = ["!", "@", "#", "$", "%", "^", "&", "*"];

var pwLength;
var specialCharacters;
var upperCharacters;
var lowerCharacters;
var numericCharacters;
var generateBtn = document.querySelector("#generate");
var results = [];

var promptLength = function () {
  var passLength = window.prompt("Please choose a password length between 8 and 128"); // need to make this so it only excepts numbers, not letters
  passLength = parseInt(passLength);
  if (!passLength) {
    window.alert("Please enter a numeric value.");
    promptLength();
  }
  if (passLength < 8 || passLength > 128) {
    window.alert("Please enter a value between 8 and 128.");
    promptLength();
  }
  pwLength = passLength;
}

var promptSpecType = function () {
  var hasSpecChar = window.confirm("Do you want special characters in your password?");
  return hasSpecChar;
}

var promptUpCaseType = function () {
  var hasUpperChar = window.confirm("Do you want uppercase characters in your password?");
  return hasUpperChar;
}

var promptLowCaseType = function () {
  var hasLowerChar = window.confirm("Do you want lowercase characters in your password?");
  return hasLowerChar;
}

var promptNumbType = function () {
  var hasNumbChar = window.confirm("Do you want numeric characters in your password?");
  return hasNumbChar;
}

function writePassword() {

  promptLength();
  specialCharacters = promptSpecType();
  upperCharacters = promptUpCaseType();
  lowerCharacters = promptLowCaseType();
  numericCharacters = promptNumbType();
  console.log(pwLength);

  if (!specialCharacters && !upperCharacters && !lowerCharacters && !numericCharacters) {
    window.alert("Please choose at least one character type.");
    promptLength();
  }

  var randomElement = function (array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
    return element;
  }

  var randomArray = function(array){
    while (pwLength >= 0) {
      if (specialCharacters) {
        array.push(randomElement(passSpecLetters));
        pwLength--;
      }
      if (upperCharacters) {
        array.push(randomElement(passUpperLetters));
        pwLength--;
      }
      if (lowerCharacters) {
        array.push(randomElement(passLowerLetters));
        pwLength--;
      }
      if (numericCharacters) {
        array.push(randomElement(passNumbs));
        pwLength--;
      }
    }
  }
randomArray(results);




  var generatePassword = function(array) {
    // convert array into string
    // return the string
    let arrayToString = array.toString();
    array.toString(array.join(""));
    array.join("");
    return array.join("");
  }


  // create function to store while loop - in while loop can push randomElement which the user is asked for into results array
  // convert results array into string

  // I THINK I need to look up how to randomize characters - not sure if done by referencing [i] in a randomNumber function?
  // if loops to validate input

  // Get references to the #generate element


  // Write password to the #password input

  var password = generatePassword(results);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
