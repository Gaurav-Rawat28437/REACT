import chalk from "chalk"
import figlet from "figlet"
import cowsay from "cowsay"

//chalk module
console.log("hello world")
console.log(chalk.blue("hello world"))

//figlet module
figlet("hello gaurav",(err,data)=>{
    console.log(chalk.red(data))
})

//cowsay module

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(chalk.red(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
})));
