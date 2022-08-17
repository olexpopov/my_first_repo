const chalk = require ('chalk')
const { strictCommands } = require('yargs')
const yargs = require ('yargs')
const notes = require ('./notes.js')

yargs.version('1.1.0')
yargs.command({
command: 'add',
describe:'add a new note',
builder:{
    title:{
        describe:" note tittle",
        demandOption:true,
        type:"string"
    },
    body:{
        describe:" note body",
        demandOption:true,
        type:"string"
    }
},
handler:function(argv){
    notes.addNote(argv.title,argv.body)
}
})

yargs.command({
    command: 'remove',
    describe:'remove note',
    builder:{
        title:{
            describe:" note tittle",
            demandOption:true,
            type:"string"
        },
    },
    handler:function(argv){
        notes.removeNote(argv.title)
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



yargs.parse()


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