// void
// Tipo explícito
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstname);
    // return 'hello'
}
showInfo({ id: 1, username: 'D4nl3l', firstname: 'Daniel' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User info', "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstname: " + user.firstname + "\n    ");
}
showFormattedInfo({ id: 1, username: 'D4nl3l', firstname: 'Daniel' });
// tipo void, como tipo de dato en variable
var unusable;
unusable = null;
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
