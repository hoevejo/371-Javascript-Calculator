#!/usr/bin/env node

console.log("Welcome to Calculator.js\n");

var total = 0.0;
const validOps = ["+", "-", "*", "/", "q"]
var op;
var value2;

console.log(`Current total: ${total}\n`);

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

//Function that asks the user for the operation

function askForOp(){
	readline.question("Enter operation (+-*/, q to quit): ", input => {op = input;
	checkValidOp(op);});
}

//Checks if the user input a valid operator

function checkValidOp(op){
	if (!validOps.includes(op)) {
		console.log("Invalid operator input, please enter +-*/ or q.");
		askForOp();
	} else if (op == "q") {
		console.log("Calculator go night night now");
		readline.close();
	} else {
		enterVal();
	}
}

//Checks if the user input a valid number

function enterVal() {
	readline.question("Enter Value: ", val => {value2 = parseFloat(val);
	if (isNaN(value2)) {
		console.log("Invalid number");
		enterVal();
	} else {
		calc();
	}
	});
}

askForOp();

//Calculates the value based on the given operator and number and prints to the screen

function calc(){
	if(op == "+"){
		total += value2;
		console.log(`\nCurrent total: ${total}\n`);
		askForOp();
	}
	else if(op == "-"){
                total -= value2;
                console.log(`\nCurrent total: ${total}\n`);
                askForOp();
        }
	else if(op == "*"){
                total *= value2;
                console.log(`\nCurrent total: ${total}\n`);
                askForOp();
        }
	else if(op == "/"){
		if (value2 == 0) {
			console.log("Can't divide by 0") 
			askForOp();
		} else {
                	total /= value2;
                	console.log(`\nCurrent total: ${total}\n`);
                	askForOp();
                }
        }
	

}
