var read=require("readline-sync")
var num1=read.question("Enter the first number")
var num2=read.question("Enter the second number")
if(num1>num2)
console.log("largest number is "+num1)
else if(num1===num2)
console.log("both the numbers are equal")
else 
console.log("largst number is "+num2)

