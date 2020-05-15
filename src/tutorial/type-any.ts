// Tipo explícito
let idUser: any

idUser = 1      // number
idUser = '1'    // string

console.log('idUser', idUser)

// Tipo inferido
let otherId
otherId = 1
otherId = '1'
// otherId = true
console.log('otherId', otherId)

let surprise: any = 'Hello typescript'
// surprise.sayHello() // Error
//
const res = surprise.substring(6)
console.log(res)
