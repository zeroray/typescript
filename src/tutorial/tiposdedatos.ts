// Number
let phone: number
phone = 1
phone = 12345678
// phone = 'hola'; // Error

// Inferido
let phoneNumber = 2134567
phoneNumber = 2342345
// phoneNumber = true; // Error

let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// Strings
let username: string = "Daniel"
username = "El mismo Daniel"

// Boolean
let isPro: boolean
isPro = true
// isPro = 'NO'; // Error

// Inferido
let isUserPro = false
console.log(typeof isUserPro)

// Template String
// Uso de back-tick `
let userInfo : string
userInfo = `
    User Info:
    username: ${username}
    phone: ${phone}
    isPro: ${isPro}
`

console.log('userInfo', userInfo);