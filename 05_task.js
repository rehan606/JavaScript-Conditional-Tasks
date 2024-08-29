/*Task - 05
************* 

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

*/

let num1 = 90;
let num2 = 95;
let result;

if (num1 > num2){
    result = num1 * 2;
    console.log("The result is:", result)
} else {
    result = num1 + num2;
    console.log("The sum is:", result)
}

//=====Turnary Operator======

result = num1 > num2 ? console.log("The Multification is:", num1 * 2) : console.log("The sum is:" ,num1 + num2);