/*Task - 06
************* 

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let tricketPrice = 800;
let age = 9;
let isStudent = false
let tricketFare;
let totalPayment;

if (age < 10){
    tricketFare = 0; 
    totalPayment = "free";
    console.log("The ticket is free for children under 10 years old." + tricketFare  + "Tk");
} else if(isStudent){
    //Get a 50% Discount
    tricketFare = tricketPrice * 50 /100;
    totalPayment = tricketPrice-tricketFare;
    console.log("The ticket fare for students is 50% off: "+ tricketFare + " tk.");
} else if(age >= 60){
    //Get a 15% Discount
    tricketFare = tricketPrice * 15/100;
    totalPayment = tricketPrice-tricketFare;
    console.log("The ticket fare for senior citizens (60+) is 15% off: " + tricketFare + " tk.");
} else{
    tricketFare = tricketPrice;
    console.log("The regular ticket fare is: " + tricketFare + " tk.");
}
console.log("The final ticket fare is: " + totalPayment + " tk.");