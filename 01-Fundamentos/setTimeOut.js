console.log('hola') //1 

setTimeout( () => {
    console.log('primero') //5
}, 3000)

setTimeout( () => {
    console.log('segundo') //4
}, 10)

setTimeout( () => {
    console.log('terecero') //3 
}, 0)

console.log('hola Mundo') //2