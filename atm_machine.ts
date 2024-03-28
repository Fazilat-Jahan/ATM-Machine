#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n This ATM Machine Is Built By Fazilat Jahan \n")

let myBalance = 4500
let myPincode = 1010

let pin= await inquirer.prompt([{
    name: "PinNumber",
    type: "number",
    message: "Please Enter Your Pin Code",
}]);

if (pin.PinNumber == myPincode) {
    console.log("\n Correct Pin Code \n")

    let options = await inquirer.prompt([{
        name: "selection",
        message: "Please Select Options",
        type: "list",
        choices : ["Withdraw", "Fast Cash" , "Check Balance"]
    }]);

    console.log("\n")

    if (options.selection == "Withdraw"){
        let money = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Please Enter Your Amount For Withdraw"
        });
      
       if (money.amount > myBalance ) {
        console.log("\n Insufficient Amount \n")
       } else {
        myBalance -= money.amount 
       console.log(`\n Thanks for Withdrawal. \n Now Your Current Balance Is ${myBalance}\n`) }
    
    }

    else if (options.selection == "Fast Cash"){
        let cash = await inquirer.prompt({
            name: "cash",
            type: "list",
            message: "Please Select",
            choices: ["500" ,"1000", "5000"]
        })
        if (cash.cash == "500"){
            if (cash.cash  > myBalance) {
                console.log("\n Insufficient Amount \n")
            } else {
                myBalance -= cash.cash
                console.log(`\n Thanks for Withdrawal. \n Now Your Current Balance Is ${myBalance}\n `) }
        }    
        else if (cash.cash == "1000"){
            if (cash.cash  > myBalance) {
                console.log("\n Insufficient Amount\n")
            } else {
                myBalance -= cash.cash
                console.log(`\n Thanks for Withdrawal. \n Now Your Current Balance Is ${myBalance}\n`) }
        }    

        else if (cash.cash == "5000"){
            if (cash.cash  > myBalance) {
                console.log("\n Insufficient Amount \n")
            } else {
                myBalance -= cash.cash
                console.log(`\n Thanks for Withdrawal. \n Now Your Current Balance Is ${myBalance}\n`) }
        }    
    }

    else if (options.selection == "Check Balance"){
    console.log(` Your Current Balance Is ${myBalance}\n`)
    }
}

else{
    console.log("\n Incorrect Pin Number \n")
}