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


// Bonus:
console.log("--- Bonus Conversion ---");
const account5 = { 
    name: "Bonus Foreign", 
    balance: 1000, 
    currency: "EUR", 
    type: "Checking" };
const exchangeRate = 1.1; 
const euroTransfer = 100;

if (account5.balance >= euroTransfer) {
    if (account5.currency === "EUR" && account1.currency === "USD") {
        account5.balance -= euroTransfer;
        let converted = euroTransfer * exchangeRate;
        account1.balance += converted;
        console.log(account5.name + " transferred " + euroTransfer + " EUR (" + converted.toFixed(2) + " USD) to " + account1.name);
    } else {
        console.log("Transfer failed: currency mismatch");
    }
} else {
    console.log("Transfer failed: insufficient funds");
}



// 4. Monthly maintenance , adding to savings and removing from checking accounts.
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

// 5. Comparisons: the highest balance, the lowest balance.

let highest = account1;
let lowest = account1;

// comparing account2
if (account2.balance > highest.balance) {
    highest = account2;
} else {
    highest = highest;
}

if (account2.balance < lowest.balance) {
    lowest = account2;
} else {
    lowest = lowest;
}

// compare account3
if (account3.balance > highest.balance) {
    highest = account3;
} else {
    highest = highest;
}

if (account3.balance < lowest.balance) {
    lowest = account3;
} else {
    lowest = lowest;
}

// compare account4
if (account4.balance > highest.balance) {
    highest = account4;
} else {
    highest = highest;
}

if (account4.balance < lowest.balance) {
    lowest = account4;
} else {
    lowest = lowest;
}

console.log("Highest balance: " + highest.name + " with " + highest.balance.toFixed(2) + " " + highest.currency);
console.log("Lowest balance: " + lowest.name + " with " + lowest.balance.toFixed(2) + " " + lowest.currency);

// 6. Status check (no loops, only if...else)
console.log("Account Status--");

// Account 1
if (account1.balance > 0) {
    console.log(account1.name + ": Active");
} else if (account1.balance === 0) {
    console.log(account1.name + ": Empty");
} else {
    console.log(account1.name + ": Overdrawn");
}

// Account 2
if (account2.balance > 0) {
    console.log(account2.name + ": Active");
} else if (account2.balance === 0) {
    console.log(account2.name + ": Empty");
} else {
    console.log(account2.name + ": Overdrawn");
}

// Account 3
if (account3.balance > 0) {
    console.log(account3.name + ": Active");
} else if (account3.balance === 0) {
    console.log(account3.name + ": Empty");
} else {
    console.log(account3.name + ": Overdrawn");
}

// Account 4
if (account4.balance > 0) {
    console.log(account4.name + ": Active");
} else if (account4.balance === 0) {
    console.log(account4.name + ": Empty");
} else {
    console.log(account4.name + ": Overdrawn");
}


// 7. Final Summary (no loops)
console.log(" Final Summary ---");
console.log(account1.name + " | Balance: " + account1.balance.toFixed(2) + " " + account1.currency + " | Type: " + account1.type);
console.log(account2.name + " | Balance: " + account2.balance.toFixed(2) + " " + account2.currency + " | Type: " + account2.type);
console.log(account3.name + " | Balance: " + account3.balance.toFixed(2) + " " + account3.currency + " | Type: " + account3.type);
console.log(account4.name + " | Balance: " + account4.balance.toFixed(2) + " " + account4.currency + " | Type: " + account4.type);