/* Task - 01
*************
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk

*/


// Define the burger price
let burgerPrice = 50; 
let cokePrice;

if (burgerPrice > 500) {
    cokePrice = 0; // Free Coke
    console.log("Congratulations! You get a free Coke.");
} else {
    cokePrice = 30; // Coke for 30tk
    console.log("Coke will cost 30tk.");
}

console.log(`The price of the Coke is:`, cokePrice);
