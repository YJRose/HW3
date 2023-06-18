// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

    var x = window.prompt("How many charactors to you want for your passwords? pick from 8 to 14.");

    if (x < 8 || x > 14) {

        window.alert("please try again and pick from your password length from 8 to 14.");


    } else {

        var random = (length = x - 1) => {
            // Declare all characters
            let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let chars1 = '~!@#$%^&*+:<>?';


            // Pick characers randomly
            let str = '';
            let str1 = '';
            for (let i = 0; i < length; i++) {
                str += chars.charAt(Math.floor(Math.random() * chars.length));
                str1 = chars1.charAt(Math.floor(Math.random() * chars1.length));
                var str2 = str + str1;
            }

            return str2;

        }
    };

    var password = random();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);