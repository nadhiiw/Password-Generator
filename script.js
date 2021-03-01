// Assignment Code
var generateBtn = document.querySelector("#generate");
var body = document.querySelector(".wrapper")
   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function question(){
  var length = prompt('How many characters do you want? ')
  // add if the length is less than eight to have error 
  if(length < 8){
    alert('Password must have more than eight characters')
    writePassword();
  }
  // asking the user the question to match to create password
  var lowerCase = confirm('chick okay if you want lowercase')
  var upperCase = confirm('chick okay if you want uppercase')
  var num = confirm('chick okay if you want numbers')
  var special = confirm('chick okay if you want characters')
  var answers = {
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    num: num,
    special: special
  }
  return answers
};

// the list of the selections 
function generatePassword(){
var letter = "abcdefghijklmnopqrstuvwxyz";
var  capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var characters ='!@#$%^&*';
var options = question();
console.log(options);

// Add if, to make sure if it is true that can selection the password
var selection = ""
if(options.lowerCase){
  selection += letter
  console.log(selection);
} 

if(options.upperCase){
  selection += capital
  console.log(selection);
}

if(options.num){
  selection += number
  console.log(selection);
}

if(options.special){
  selection += characters
  console.log(selection);
}

// create for loop to through each one of them and selection random characters
var result ='';
for(i=0; i < options.length; i++){
  result += selection.charAt(Math.floor(Math.random()*selection.length));
}
// the result at end that will print 
return result;

};
