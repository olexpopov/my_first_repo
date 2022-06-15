
const getNotes = require ('./notes.js')
const chalk = require ('chalk')

const command = process.argv[2]

console.log(process.argv)

if (command == 'add')
{
    console.log('Adding note')
}
else if(command == 'remove ')
{
    console.log('remove note')
}
// const x = getNotes()
// const greenMsg = chalk.green.bold('Success!')
// console.log(x)
// console.log(greenMsg)
// console.log(process.argv[c2])












// const add = require ('./Utils.js')
// const summ = add(2,-4)
// console.log(summ)