// Assignment code here

//Characters can be used for password
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialChar = ['!', '"', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

var andomChar = [];


function generatePassword() {

//length of password
  lengthOfPassword = prompt("How many characters would you like your password? Choose between 8 and 128");
  if (lengthOfPassword < 8 || lengthOfPassword > 128) {
    return "how to fix when something went wrong? try again:)";
  } else if (isNaN(lengthOfPassword)) {
    lengthOfPassword = prompt("not valid number.not today:(");
  }


  //uppercase characters
  uppercasePassword = confirm("uppercase characters for your password?");
  if (uppercasePassword) {
    alert("you will have it");
  }

  //lowercase characters
  lowercasePassword = confirm("lowercase characters for your password?");
  if (lowercasePassword) {
    alert("you will have it");
  }
  

  //numbers characters
  numbersPassword = confirm("numbers for your password?");
  if (numbersPassword) {
    alert("you will have it");
  }

  //special characters
  specialPassword = confirm("special characters for your password?");
  if (specialPassword) {
    alert("you will have it");
  }

  //when all cancel*
  if (lowercasePassword === false && uppercasePassword === false && numbersPassword === false && specialPassword === false) {
    return "at least one character type?";
  };

  //merge chosen characters
  if (uppercasePassword) {
    andomChar = andomChar.concat(uppercase);
  }
  if (lowercasePassword) {
    andomChar = andomChar.concat(lowercase);
  }
  if (numbersPassword) {
    andomChar = andomChar.concat(numbers);
  }
  if (specialPassword) {
    andomChar = andomChar.concat(specialChar);
  }

  //display final password
  var finalPassword = "";

  for (var i = 0; i < lengthOfPassword; i++) {
    var randomPassword = [Math.floor(Math.random() * andomChar.length)];
    finalPassword += andomChar[randomPassword];
  }
  return finalPassword;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var andomChar = [];
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);