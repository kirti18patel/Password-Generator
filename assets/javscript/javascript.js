var setOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var setOfLowercaseAlphabets = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var setOfUppercaseAlphabets = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var setOfSpecialCharacters = [];
var inputLength = function(){
    return (prompt("How many characters would you like your password to contain?"));
};

var passwordGenerator = function(){
    alert("you are in pass");
};

var collectData = function() {
    var length = inputLength();
    if(!isNaN(length) && length!=null && length<=20 && length>=8){
        alert("You have entered password length : " + length);
        var specialCharactersInPassword = confirm("Click OK to add special characters.");
        var numbersInPassword = confirm("Click OK to add numeric characters.");
        var lowerCaseCharacterInPassword = confirm("Click OK to add lowercase character.");
        var upperCaseCharacterInPassword = confirm("Click OK to add uppercase characters.");
        passwordGenerator();
    }
    else{
        var lengthConfirmation=confirm("You have entered wrong choice.\nClick OK to enter value again or click CANCEL to exit");
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