// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
   //Define variables
    var p_array = [];
    const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const special = [' ','!', '"', '#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
    var password = ''; 

    var p_length = prompt('Password length (minimum 8 characters, maximum 128 characters');
    
    if (p_length !== null && parseInt(p_length) !== NaN && p_length > 7 && p_length < 129){    
        
        var p_lower = prompt('Do you want your password to include lowercase letters?');
        p_lower = p_lower.toLowerCase();

        if(p_lower === 'yes' || p_lower === 'y'){
            p_array = lower;
            //alert(p_array);

        }else if(p_lower === 'no' || p_lower === 'n' ){
            p_array = p_array;
            //alert(p_array);

        }else{
            message = 'Not a valid entry. Please enter yes or no.';
            return message;
        }

        var p_upper = prompt('Do you want your password to include uppercase letters?');
        p_upper = p_upper.toLowerCase();

        if(p_upper === 'yes' || p_upper === 'y'){
            p_array = p_array.concat(upper);
            //alert(p_array);

        }else if(p_upper === 'no' || p_upper === 'n' ){
            p_array = p_array;
            //alert(p_array);

        }else{
            message = 'Not a valid entry. Please enter yes or no.';
            return message;
        }

        var p_number = prompt('Do you want your password to include numbers?');
        p_number = p_number.toLowerCase();

        if(p_number === 'yes' || p_number === 'y'){
            p_array = p_array.concat(num);
            //alert(p_array);

        }else if(p_number === 'no' || p_number === 'n' ){
            p_array = p_array;
            //alert(p_array);

        }else{
            message = 'Not a valid entry. Please enter yes or no.';
            return message;
        }

        var p_special = prompt('Do you want your password to include special characters?');
        p_special = p_special.toLowerCase();

        if(p_special === 'yes' || p_special === 'y'){
            p_array = p_array.concat(special);
            //alert(p_array);

        }else if(p_special === 'no' || p_special === 'n' ){
            p_array = p_array;
            //alert(p_array);

        }else{
            message = 'Not a valid entry. Please enter yes or no.';
            return message;
        }
        
    }else{
        message = 'Not a valid entry. Please enter a number between 8 and 128.';
        return message;
    }

    p_mix = p_array.length;
    //alert(p_mix);

    for (i = 0; i < parseInt(p_length); i++){
        var rando = 0;
        rando = Math.floor(Math.random() * p_mix);
        password = password.concat(p_array[rando]);
        //Prevent space from being first character
        if (i = 0 && password === ' '){
            rando = Math.floor(Math.random() * p_mix);
            password = password.concat(p_array[rando]);
        }
    }

    return password;
}
/* 
1. Click button, make prompts 
    -Length at least 8 characters and no more than 128 characters, 
    -whether or not to include lowercase, uppercase, numeric, and/or special characters
    -validated and at least one character type should be selected
    -password is generated that matches the selected criteria

*/