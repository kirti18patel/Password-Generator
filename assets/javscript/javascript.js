var inputLength = function(){
    return (prompt("Enter length of password : \nMinimum is 8\nMaximum is 20"));
};

var passwordGenerator = function() {
    var length = inputLength();
    if(!isNaN(length) && length!=null && length<=20 && length>=8){
        alert("You have entered password length : " + length);
        var numbersInPassword = prompt("How many characters woulld you like your password to contain?\nMinimum is 0\nMaximum is" + length);
    }
    else{
        var lenghtConfirmation=confirm("You have entered wrong choice.\nClick OK to enter value again or click CANCEL to exit");
        if(lenghtConfirmation){
            passwordGenerator();
        }
        else{
            alert("Thank You! Use Password Generator again!");
        }
    }
};

var buttonEl = document.querySelector("#generate");
buttonEl.addEventListener("click", passwordGenerator);