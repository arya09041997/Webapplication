const readlineSync = require("readline-sync");
var num1=parseFloat(readlineSync.question("enter the first number"));
var num2=parseFloat(readlineSync.question("enter the second number"));
function add(num1,num2)
{
    return num1+num2;
}
var sum=add(num1,num2);
console.log("the sum of",num1,"and",num2,"is",sum);



