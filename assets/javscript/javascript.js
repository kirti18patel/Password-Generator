var setOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var setOfLowercaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var setOfUppercaseAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var setOfSpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "{", "}", "/"];

var password = [];

var inputLength = function(){
    return (prompt("How many characters would you like your password to contain?"));
};

var shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

var passwordGenerator = function(length, collectedData){
    if (collectedData[0]==true){
        for(var i=0; i<length; i++){
            var randomNumber = Math.floor(Math.random()*(setOfSpecialCharacters.length));
            password.push(setOfSpecialCharacters[randomNumber]);
        }
    }
    if (collectedData[1]== true){
        for(var i=0; i<length; i++){
        var randomNumber = Math.floor(Math.random()*(setOfNumbers.length));
        password.push(setOfNumbers[randomNumber]);
        }
    }
    if (collectedData[2]== true){
        for(var i=0; i<length; i++){
        var randomNumber = Math.floor(Math.random()*(setOfLowercaseAlphabets.length));
        password.push(setOfLowercaseAlphabets[randomNumber]);
        }
    }
    if (collectedData[3]== true){
        for(var i=0; i<length; i++){
        var randomNumber = Math.floor(Math.random()*(setOfUppercaseAlphabets.length));
        password.push(setOfUppercaseAlphabets[randomNumber]);
        }
    }
    shuffle(password);
    return password.join("");
};

var updatePassword = function(finalPassword){
    var passwordPlaceholder = document.querySelector("#password");
    passwordPlaceholder.innerHTML = finalPassword;
};

var collectData = function() {
    var length = inputLength();
    if(!isNaN(length) && length!=null && length<=128 && length>=8){
        alert("You have entered password length : " + length);
        var specialCharactersInPassword = confirm("Click OK to add special characters.");
        var numbersInPassword = confirm("Click OK to add numeric characters.");
        var lowerCaseCharacterInPassword = confirm("Click OK to add lowercase character.");
        var upperCaseCharacterInPassword = confirm("Click OK to add uppercase characters.");
        var collectedData = [specialCharactersInPassword, numbersInPassword, lowerCaseCharacterInPassword, upperCaseCharacterInPassword];
        var finalPassword = passwordGenerator(length, collectedData);
        updatePassword(finalPassword);
    }
    else{
        var lengthConfirmation=confirm("You have entered wrong choice. \nPassword length should be in between 8 to 128.\nClick OK to enter value again or click CANCEL to exit");
        if(lengthConfirmation){
            collectData();
        }
        else{
            alert("Thank You! Use Password Generator again!");
        }
    }
};

var buttonEl = document.querySelector("#generate");
buttonEl.addEventListener("click", collectData);