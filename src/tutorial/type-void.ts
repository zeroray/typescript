// void

// Tipo explícito
function showInfo(user: any): any {
    console.log('User info', user.id, user.username, user.firstname)
    // return 'hello'
}

showInfo({ id: 1, username: 'D4nl3l', firstname: 'Daniel'})

// Tipo inferido
function showFormattedInfo(user: any) {
    console.log('User info', `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname}
    `);
}

showFormattedInfo({ id: 1, username: 'D4nl3l', firstname: 'Daniel'})

// tipo void, como tipo de dato en variable
let unusable: void
unusable = null
unusable = undefined

// Tipo: Never
function handleError(code: number, message: string): never {
    
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`)

}

try {
    handleError(404, 'Not Found')
} catch (error) {
    
}

function sumNumbers(limit: number) {
    let sum = 0
    while(true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina