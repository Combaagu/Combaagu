
const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf8')

const word = content.split(' ');
// const wordCount = content.split(' ').length;

//12 palabras react
const wordCount2 = word.filter(
    (palabra) => palabra.toLowerCase() === 'react'
) .length

//50 palabras react, porque esta utiliza la funcion includes, para incluir Todas la palabras react
const wordCount3 = word.filter(
    (palabra) => palabra.toLowerCase().includes('react')
) .length


//mejor practica MATCH - ?? [] (si no encuentra ninguno que devuelva un arreglo vacio)
const wordCountFinal = content.match(/react/gi ?? []).length



console.log('Palabras: ' , word.length)

console.log(`La palabra react aparace ${wordCount2} veces`)

console.log(`La palabra react aparace ${wordCount3} veces`)

console.log(`La palabra react aparace ${wordCountFinal} veces`)