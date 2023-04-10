#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "NumberOne",
        message: "Please Enter your First Number",
        type: "number"
    },
    {
        name: "NumberTwo",
        message: "Please Enter your Second Number",
        type: "number"
    },
    {
        name: "operator",
        message: "Which operation you want to perform?",
        type: "list",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
const { NumberOne, NumberTwo, operator } = answer;
if (operator == "+") {
    console.log(`The Answer of ${NumberOne} ${operator} ${NumberTwo} = ${NumberOne + NumberTwo} `);
}
else if (operator == "-") {
    console.log(`The Answer of ${NumberOne} ${operator} ${NumberTwo} = ${NumberOne - NumberTwo} `);
}
else if (operator == "*") {
    console.log(`The Answer of ${NumberOne} ${operator} ${NumberTwo} = ${NumberOne * NumberTwo} `);
}
else if (operator == "/") {
    console.log(`The Answer of ${NumberOne} ${operator} ${NumberTwo} = ${NumberOne / NumberTwo} `);
}
else if (operator == "%") {
    console.log(`The Answer of ${NumberOne} ${operator} ${NumberTwo} = ${NumberOne / NumberTwo} `);
}
