#!/usr/bin/env node

console.log("Welcome to Running-Calc.js");

var total = 0.0;

console.log(`Current total: ${total}`);

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

function askForOp(){
	readline.question("Enter operation (+-*/, q to quit):", op => {calc(op)});
}

askForOp();

var value2;

function calc(op){
	if(op == "+"){
		readline.question("Enter Value: ", value2 => {
		total += parseFloat(value2);
		console.log(`Current total: ${total}`);
			askForOp();
		});
	}
	else if(op == "-"){
                readline.question("Enter Value: ", value2 => {
                total -= parseFloat(value2);
                console.log(`Current total: ${total}`);
                askForOp();
		});
        }
	else if(op == "*"){
                readline.question("Enter Value: ", value2 => {
                total *= parseFloat(value2);
                console.log(`Current total: ${total}`);
                askForOp();
		});
        }
	else if(op == "/"){
                readline.question("Enter Value: ", value2 => {
                total /= parseFloat(value2);
                console.log(`Current total: ${total}`);
                askForOp();
		});
        }
	else if(op == "q"){
                console.log("Calculator go night night now");
		readline.close();
        }
	else {
		console.log("Invalid operation, please enter +-*/ or q to quit");
		askForOp();
	}



}
