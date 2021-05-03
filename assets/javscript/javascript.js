var inputLength = function(){
    return (prompt("Enter length of password : \nMinimum is 8\nMaximum is 20"));
};

var passwordGenerator = function() {
    var length = inputLength();
    if(!isNaN(length) && length!=null && length.length<=20 && length.length>=8){
        alert("You have entered password length : " + length);
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