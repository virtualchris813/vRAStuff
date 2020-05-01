// This code will create a password containing numbers and letters and return a string with the password.
// Designed to be used in a vRO action
//
// By: Chris Adams
// https://github.com/virtualchris813
// virtualchris813@gmail.com

// Change this to however long the password needs to be.
var passLength = 16;
function generatePassword(passLength, possibleChars){
	var tmpPassword = "";
	for( var i = passLength; i > 0; --i){
		tmpPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)];
	}
    return tmpPassword;
}

var newPass = generatePassword(pass_length, '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
return newPass;
