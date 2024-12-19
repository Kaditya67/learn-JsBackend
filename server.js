const fs = require('fs')

const arg2 = process.argv[2]
const arg3 = process.argv[3]

const arguments = (process.argv.length - 2);
console.log("Arguements : " + arguments)
console.log("Source of Node js : " + process.argv[0])
console.log("Source of file : " + process.argv[1])

if(arg2){
    for (let index = 0; index < arguments; index++) {
        console.log("Argument " + (index+1) + " : " + process.argv[index + 2])
    }
}else{
    console.log("No arguments provided !")
}