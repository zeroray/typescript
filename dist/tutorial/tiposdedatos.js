// Number
var phone;
phone = 1;
phone = 12345678;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 2134567;
phoneNumber = 2342345;
// phoneNumber = true; // Error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Strings
var username = "Daniel";
username = "El mismo Daniel";
// Boolean
var isPro;
isPro = true;
// isPro = 'NO'; // Error
// Inferido
var isUserPro = false;
console.log(typeof isUserPro);
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
