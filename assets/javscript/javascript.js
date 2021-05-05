var inputLength = function(){
    return (prompt("How many characters would you like your password to contain?"));
};

var passwordGenerator = function() {
    var length = inputLength();
    if(!isNaN(length) && length!=null && length<=20 && length>=8){
        alert("You have entered password length : " + length);
        var specialCharactersInPassword = confirm("Click OK to add special characters.");
        var numbersInPassword = confirm("Click OK to add numeric characters.");
        var lowerCaseCharacterInPassword = confirm("Click OK to add lowercase character.");
        var upperCaseCharacterInPassword = confirm("Click OK to add uppercase characters.");

    }
    else{
        var lengthConfirmation=confirm("You have entered wrong choice.\nClick OK to enter value again or click CANCEL to exit");
        if(lengthConfirmation){
            passwordGenerator();
        }
        else{
            alert("Thank You! Use Password Generator again!");
        }
    }
};

var buttonEl = document.querySelector("#generate");
buttonEl.addEventListener("click", passwordGenerator);