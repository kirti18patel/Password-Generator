// all possible characters declared in separate arrays
var setOfNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var setOfLowercaseAlphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var setOfUppercaseAlphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var setOfSpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", "{", "}", "/"];

// blank array for password
var password = [];

//  shuffle all items in array 
var shuffle = function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// generate password in random fashion by recieving data enetred by user
var passwordGenerator = function(collectedData){

    // check if user want to add special characters, then generate random special characters and add to password array
    if (collectedData[1]==true){
        for(var i=0; i<collectedData[0]; i++){
            var randomNumber = Math.floor(Math.random()*(setOfSpecialCharacters.length));
            password.push(setOfSpecialCharacters[randomNumber]);
        }
    }

    // check if user want to add numbers, then generate random number and add to password array
    if (collectedData[2]== true){
        for(var i=0; i<collectedData[0]; i++){
        var randomNumber = Math.floor(Math.random()*(setOfNumbers.length));
        password.push(setOfNumbers[randomNumber]);
        }
    }

    // check if user want to add lowercase characters, then generate random lowercase characters and add to password array
    if (collectedData[3]== true){
        for(var i=0; i<collectedData[0]; i++){
        var randomNumber = Math.floor(Math.random()*(setOfLowercaseAlphabets.length));
        password.push(setOfLowercaseAlphabets[randomNumber]);
        }
    }

    // check if user want to add uppercase characters, then generate random uppercase characters and add to password array
    if (collectedData[4]== true){
        for(var i=0; i<collectedData[0]; i++){
        var randomNumber = Math.floor(Math.random()*(setOfUppercaseAlphabets.length));
        password.push(setOfUppercaseAlphabets[randomNumber]);
        }
    }

    // shuffle the elements of array
    shuffle(password);
    // join all the elements of password array as a string and return it
    return password.join("");
};

// update final password generated in the textarea element of webpage
var updatePassword = function(finalPassword){
    var passwordPlaceholder = document.querySelector("#password");
    passwordPlaceholder.innerHTML = finalPassword;
};


// return password length of user's choice
var inputLength = function(){
    return (prompt("How many characters would you like your password to contain?"));
};

// throws some question to collect data for criteria of password
var collectData = function() {
    var length = inputLength();
    // validate length entered by user
    if(!isNaN(length) && length!=null && length<=128 && length>=8){
        alert("You have entered password length : " + length);
        var specialCharactersInPassword = confirm("Click OK to add special characters.");
        var numbersInPassword = confirm("Click OK to add numeric characters.");
        var lowerCaseCharacterInPassword = confirm("Click OK to add lowercase character.");
        var upperCaseCharacterInPassword = confirm("Click OK to add uppercase characters.");
        var collectedData = [length, specialCharactersInPassword, numbersInPassword, lowerCaseCharacterInPassword, upperCaseCharacterInPassword];
        var finalPassword = passwordGenerator(collectedData);
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

// calling collectData function after listening to click event of Password Generate button
var buttonEl = document.querySelector("#generate");
buttonEl.addEventListener("click", collectData);