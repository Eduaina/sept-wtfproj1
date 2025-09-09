//Create 4 accounts as objects.
const account1 = {
    name: "Miss Annabel", 
    balance: 20000, 
    currency: "USD", 
    type: "Savings"
};

const account2 = {
    name: "Mr Anthony", 
    balance: 3000000, 
    currency: "NGN", 
    type: "Checking"
}

const account3 = {
    name: "Mrs Ziva", 
    balance: 100000, 
    currency: "USD", 
    type: "Checking"
}

const account4 = {
    name: "Mr Ebenezer", 
    balance: 50000000, 
    currency: "NGN", 
    type: "Savings"
}

//1. Simulating deposits:
const firstDeposit = 10000;
const secondDeposit = 5000;

//Adding different deposit amounts to two accounts.
account2.balance += firstDeposit;
account3.balance += secondDeposit;

//Showing the new balances.
console.log(account2.balance);
console.log(account3.balance);


//2. Simulating withdrawals
const withdrawal = 30000;

//Attempting withdrawals from two accounts.
if (account1.balance >= withdrawal) {
    account1.balance -= withdrawal
    console.log("Withdrawal Successful");
    console.log("Your balance is now: " + account1.balance);
} else {
    console.log("Withdrawal denied for " + account1.name + ": insufficient funds")
}

if (account4.balance >= withdrawal) {
    account4.balance -= withdrawal
    console.log("Withdrawal Successful");
    console.log("Your balance is now: " + account4.balance);
} else {
    console.log("Withdrawal denied for " + account4.name + ": insufficient funds")
}

//3. Transfering money between two accounts if they have the same currency
//If currencies are different, print: "Transfer failed: currency mismatch"
if (account1.currency == account3.currency) {
    account1.balance -= firstDeposit
    account3.balance += firstDeposit
    console.log("Transfer Successful");
    console.log("Your balance is now: " + account1.balance);
    console.log("Your balance is now: " + account3.balance);
} else {
    console.log("Transfer failed: currency mismatch");
}

if (account2.currency == account3.currency) {
    account2.balance -= firstDeposit
    account3.balance += firstDeposit
    console.log("Transfer Successful");
    console.log("Your balance is now: " + account2.balance);
    console.log("Your balance is now: " + account3.balance);
} else {
    console.log("Transfer failed: currency mismatch");
}

// 4. Monthly maintenance
//If account type is "Savings", add interest (e.g., 2% of balance). 
// If account type is "Checking", deduct fees (e.g., 50 units).
if (account1.type == "Savings") {
const interest = account1.balance * 0.02;
const deductFee = 100;
console.log('Interest Added')
console.log(account1.balance += interest)
} else {
    console.log("Fee Deducted")
    console.log(account1.balance -= withdrawal)
}

if (account2.type == "Savings") {
const interest = account2.balance * 0.02;
const deductFee = 100;
console.log('Interest Added')
console.log(account2.balance += interest)
} else {
    console.log("Fee Deducted")
    console.log(account2.balance -= withdrawal)
}

if (account3.type == "Savings") {
const interest = account3.balance * 0.02;
const deductFee = 100;
console.log('Interest Added')
console.log(account3.balance += interest)
} else {
    console.log("Fee Deducted")
    console.log(account3.balance -= withdrawal)
}

if (account4.type == "Savings") {
const interest = account4.balance * 0.02;
const deductFee = 100;
console.log('Interest Added')
console.log(account4.balance += interest)
} else {
    console.log("Fee Deducted")
    console.log(account4.balance -= withdrawal)
}