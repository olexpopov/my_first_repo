const chalk = require ('chalk')
const { strictCommands } = require('yargs')
const yargs = require ('yargs')
const getNotes = require ('./notes.js')

yargs.version('1.1.0')
yargs.command({
command: 'add',
describe:'add a new note',
handler:function(){
    console.log('adding a new note')
}
})

yargs.command({
    command: 'remove',
    describe:'remove note',
    handler:function(){
        console.log('removing notes')
    }
})
    yargs.command({
        command: 'read',
        describe:'read note',
        handler:function(){
            console.log('reading note')
        }
        })


    yargs.command({
        command: 'list',
        describe:'list note',
        handler:function(){
            console.log('listing notes')
        }
        })



console.log(yargs.argv)

// if (command == 'add')
// {
//     console.log('Adding note')
// }
// else if(command == 'remove ')
// {
//     console.log('remove note')
// }
// const x = getNotes()
// const greenMsg = chalk.green.bold('Success!')
// console.log(x)
// console.log(greenMsg)
// console.log(process.argv[c2])












// const add = require ('./Utils.js')
// const summ = add(2,-4)
// console.log(summ)