// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

    var x = window.prompt("How many charactors to you want for your passwords? pick from 8 to 14.");
    var isallNumrequire = window.prompt("do you want your password with all number? y or n");
    var isalllowerletters = window.prompt("do you want your password with all lower letters? y or n");
    var isallupperletters = window.prompt("do you want your password with all upper letters? y or n");
    var isallspcialchars = window.prompt("do you want your password with all special charactors? y or n");

    if (x < 8 || x > 14) {

        window.alert("please try again and pick from your password length from 8 to 14.");


    } else if (isallNumrequire === 'y' && x > 7 && x < 15) {
        // random numbers
        var password = Math.random().toString().substr(2, x);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;

    } else if (isalllowerletters === 'y' && x > 7 && x < 15) {
        // Declare all characters as lower letters
        let chars = 'abcdefghijklmnopqrstuvwxyz';
    
        // Pick characers randomly
        let str = '';
        let length = x;
        for (let i = 0; i < length; i++) {

            str += chars.charAt(Math.floor(Math.random() * chars.length));

        }

        var password = str;
        var passwordText = document.querySelector("#password");
        passwordText.value = password;

    } else if (isallupperletters === 'y' && x > 7 && x < 15 ) {
        // Declare all characters as upper letters
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Pick characers randomly
        let str0 = '';
        let length = x;
        for (let i = 0; i < length; i++) {

            str0 += chars.charAt(Math.floor(Math.random() * chars.length));

        }

        var password = str0;
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }else if (isallspcialchars === 'y' && x > 7 && x < 15 ) {
        // Declare all characters as special charactors
        let chars1 = '~!@#$%^&*+:<>?';

         // Pick characers randomly
        let str1 = '';
        let length = x;
        for (let i = 0; i < length; i++) {

            str1 += chars1.charAt(Math.floor(Math.random() * chars1.length));

        }

        var password = str1;
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    else {

        var random = (length = x - 1) => {
            // Declare all characters
            let chars2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let chars3 = '~!@#$%^&*+:<>?';


            // Pick characers randomly
            let str2 = '';
            let str3 = '';
            for (let i = 0; i < length; i++) {
                str2 += chars2.charAt(Math.floor(Math.random() * chars2.length));
                str3 = chars3.charAt(Math.floor(Math.random() * chars3.length));
                var str4 = str2 + str3;
            }

            return str4;

        }
    };

    var password = random();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    console.log(x, isallNumrequire, isalllowerletters, isallupperletters, isallspcialchars);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);