//const validator = require('validator')
const getNotes = require ('./notes.js')
const chalk = require ('chalk')

const x = getNotes()
const greenMsg = chalk.green.bold('Success!')
console.log(x)
console.log(greenMsg)












// const add = require ('./Utils.js')
// const summ = add(2,-4)
// console.log(summ)