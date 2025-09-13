// const num1 = 30;
// const num2 = 10;
// const name = "Eduaina"


// //Multiplication
// const multiply = num1 * num2
// console.log(multiply);

// //division
// var divide = num1 / num2;
// console.log(divide);

// //Addition
// const add = num1 + num2
// console.log(add);

// const result = add;
// console.log(add);



// //Hello, name your score is multiply

// //string concatenation
// console.log("Hello, " + name + " your score is " + multiply);

// //template Literal
// console.log(`Hello, ${name} your score is ${multiply}`)










const monthlyIncome = Number(prompt("What is your expected income for the month?"));

let dailyExpense = monthlyIncome * 0.01;

let monthlyExpense = dailyExpense * 30;

let savings = monthlyIncome - monthlyExpense;

let spending = monthlyExpense;

// Final result
const finalResult = spending;



console.log("Monthly Income is: " + monthlyIncome);
console.log("Daily Expense is: " + dailyExpense);
console.log("Monthly Expense is: " + monthlyExpense);
console.log("Savings is: "+ savings);
console.log("Spending is: " + spending);
console.log("The Final Result is: " + finalResult);



/// Part of the 1st classwork of week 2

if (user3.currency == user1.currency && user3.balance > deposit) {
    console.log(user1.balance += deposit);
    console.log(user3.balance -= deposit);
} else {
    console.log("Transfer failed");
}