



// console.log(process.env)

const { SHELL, PATHEXT, LANG } = process.env

// console.table({ LANG, PATHEXT, SHELL })

const personajes = ['Batman', 'Superman', 'Flash']

const [ , , flash] = personajes

console.table(flash) 