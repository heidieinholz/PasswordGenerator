//define character variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["~", "@", "#", "%", "^", "&", "*", "(", ")", "-", "+", "=", ">", "<", "?"];
//here's where the user's choices get stored in a giant array
var passwordCharacters = [];
//this is the final password
var password = "";
//this is the variable for how long the user wants their password to be
var passwordLength;
var passwordAlert;

//the function to get it started
function gatherSymbols() {
    var passwordLength = prompt("Enter a number between 8 and 128 for how long you would like your password to be");
    console.log("passwordLength: ", passwordLength);
    }
    //make sure the user chooses a valid password length
    if(passwordLength < 8 || passwordLength > 128){
        passwordLength = prompt("Please enter a password length between 8 and 128 characters");
        console.log("passwordLength: ", passwordLength);
        }
        //create variables to establish which preferences the user has
        var useLowercase = confirm("Do you want to use lowercase letters in your password?");
        console.log("useLowercase: ", useLowercase);
        var useUppercase = confirm("Do you want to use uppercase letters in your password");
        console.log("useUppercase: ", useUppercase);
        var useNumbers = confirm("Do you want numbers in your password?");
        console.log("useNumbers ", useNumbers);
        var useSpecial = confirm("Do you want to use special characters in your password?");
        console.log("useSpecial: ", useSpecial);
        
        //make sure the user selects at least one type of characters with a new set of prompts
        while(useLowercase === false && useUppercase === false && useNumbers === false && useSpecial === false){
            useNumbers = confirm("Please choose at least one type of character. How about numbers?");
            console.log("useNumbers: ", useNumbers);
            useLowercase = confirm("How about lowercase letters?");
            console.log("useLowercase: ", useLowercase);
            useUppercase = confirm("How about uppercase letters?");
            console.log("useUppercase: ", useUppercase);
            useSpecial = confirm("How about special characters?");
            console.log("useSpecial: ", useSpecial);
        }

        //user chooses lowercase letters
        if(useLowercase === true) {
            passwordCharacters = passwordCharacters.concat(lowerCase);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        // //user chooses uppercase letters
        if(useUppercase === true) {
            passwordCharacters = passwordCharacters.concat(upperCase);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        // //user chooses numbers
        if(useNumbers === true) {
            passwordCharacters = passwordCharacters.concat(numbers);
            console.log("passwordCharacters: ", passwordCharacters);
        }
        // //user chooses special characters
        if(useSpecial === true) {
            passwordCharacters = passwordCharacters.concat(specialChar);
            console.log("passwordCharacters: ", passwordCharacters);
        } 
      
    // call the function
    gatherSymbols();
    console.log("gatherSymbols: ", gatherSymbols);
   
function createPassword(passwordLength, passwordCharacters){
    for(i = 0; i < passwordLength; i++){
        //generates random character from the array
        var character = passwordCharacters[Math.floor(Math.random()*passwordCharacters.length)];
        console.log("character: ", character)
        //adds the randomly generated character to the password
        password = passwordLength + passwordCharacters;
        console.log("password: ", password);
    }
    alert("Your password is" + password);
}

//generates new password 
createPassword(passwordLength, passwordCharacters);
    passwordBox.textContent.value = password;
    btn1.addEventListener("click", function(){

    gatherSymbols();
})