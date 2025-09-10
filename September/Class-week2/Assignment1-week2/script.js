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

//Bonous Account
const account5 = { 
    name: "Euro Girl", 
    balance: 10000, 
    currency: "EUR", 
    type: "Checking" 
};

//1. Simulating deposits:
const firstDeposit = 10000;
const secondDeposit = 5000;

//Adding different deposit amounts to two accounts.
account2.balance += firstDeposit;
account3.balance += secondDeposit;

//Showing the new balances.
console.log("--Adding Deposits--")
console.log("New balance after adding a deposit to Account2 is: " + account2.balance);
console.log("New balance after adding a deposit to Account3 is: " + account3.balance);


//2. Simulating withdrawals
console.log("--Simulating withdrawals--")
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
console.log("--Transfering money--")
if (account1.currency == account3.currency) {
    account1.balance -= firstDeposit
    account3.balance += firstDeposit
    console.log("Transfer Successful");
    console.log("Your balance is now: $" + account1.balance + " " + account1.name);
    console.log("Your balance is now: $" + account3.balance + " " + account3.name);
} else {
    console.log("Transfer failed: currency mismatch");
}

if (account2.currency == account3.currency) {
    account2.balance -= firstDeposit
    account3.balance += firstDeposit
    console.log("Transfer Successful");
    console.log("Your balance is now: " + account2.balance + " " + account2.name);
    console.log("Your balance is now: " + account3.balance + " " + account3.name);
} else {
    console.log("Transfer failed: currency mismatch");
}


// Bonus:
console.log("--Bonus Question Attempt--");

const exchangeRate = 1.1; //Euro to USD
const transferAmount = 1000;

if (account5.balance >= transferAmount) {
    if (account5.currency === "EUR" && account1.currency === "USD") {
        account5.balance -= transferAmount;
        let convertedFee = transferAmount * exchangeRate;
        account1.balance += convertedFee;
        console.log(account5.name + " transferred " + transferAmount
             + " EUR to " + account1.name);
        console.log(account5.name + " your new account balance is: " + account5.balance);
        console.log(account1.name + " your new account balance is: " + account1.balance);
    } else {
        console.log("Transfer failed: currency mismatch");
    }
} else {
    console.log("Transfer failed: insufficient funds");
}

// 4. Monthly maintenance , adding to savings and removing from checking accounts.
console.log("--Monthly Maintenance--")

const deductFee = 100;
if (account1.type == "Savings") {
let interest = account1.balance * 0.02;
account1.balance += interest
console.log('Interest Added')
console.log("Balance is: " + account1.balance)
} else {
    account1.balance -= withdrawal
    console.log("Fee Deducted");
    console.log("New Balance is: " + account1.balance);
}

if (account2.type == "Savings") {
let interest = account2.balance * 0.02;
account2.balance += interest
console.log('Interest Added')
console.log("Balance is: " + account2.balance)
} else {
    account2.balance -= withdrawal
    console.log("Fee Deducted")
    console.log("New Balance is: " + account2.balance);
}

if (account3.type == "Savings") {
const interest = account3.balance * 0.02;
account3.balance += interest
console.log('Interest Added')
console.log("Balance is: " + account3.balance);
} else {
    account3.balance -= withdrawal
    console.log("Fee Deducted");
    console.log("New Balance is: " + account3.balance)
}

if (account4.type == "Savings") {
const interest = account4.balance * 0.02;
account4.balance += interest
console.log('Interest Added')
console.log("Balance is: " + account3.balance)
} else {
    account4.balance -= withdrawal
    console.log("Fee Deducted")
    console.log("New Balance is: " + account3.balance)
}



// 5. Comparisons: the highest balance, the lowest balance.
console.log("--Comparisons--")

//Before conversion
console.log("Before conversion  " + account1.balance, account1.currency);
console.log("Before conversion  " + account2.currency, account2.balance)
console.log("Before conversion  " + account3.currency, account3.balance)
console.log("Before conversion  " + account4.currency, account4.balance)


// Currency conversions
let exchangeRateNaira = 1500;

//Using Ternary Operators because thats all i could think of that actually worked for conversion
let account1NGN = account1.currency === "NGN" ? account1.balance : account1.balance * exchangeRateNaira;
let account2NGN = account2.currency === "NGN" ? account2.balance : account2.balance * exchangeRateNaira;
let account3NGN = account3.currency === "NGN" ? account3.balance : account3.balance * exchangeRateNaira;
let account4NGN = account4.currency === "NGN" ? account4.balance : account4.balance * exchangeRateNaira;

console.log(account1NGN, account2NGN, account3NGN, account4NGN);


let highest = { 
    name: account1.name, 
    naira: account1NGN, 
    original: account1.balance, 
    currency: account1.currency 
};
let lowest = { 
    name: account1.name, 
    naira: account1NGN, 
    original: account1.balance, 
    currency: account1.currency };

// Compare account2
if (account2NGN > highest.naira) {
    highest = { 
        name: account2.name, 
        naira: account2NGN, 
        original: account2.balance, 
        currency: account2.currency };
}
if (account2NGN < lowest.naira) {
    lowest = { 
        name: account2.name, 
        naira: account2NGN, 
        original: account2.balance, 
        currency: account2.currency };
}

// Compare account3
if (account3NGN > highest.naira) {
    highest = { 
        name: account3.name, 
        naira: account3NGN, 
        original: account3.balance, 
        currency: account3.currency };
}
if (account3NGN< lowest.naira) {
    lowest = { 
        name: account3.name, 
        naira: account3NGN, 
        original: account3.balance, 
        currency: account3.currency };
}

// Compare account4
if (account4NGN > highest.naira) {
    highest = { 
        name: account4.name, 
        naira: account4NGN, 
        original: account4.balance, 
        currency: account4.currency };
}
if (account4NGN < lowest.naira) {
    lowest = { 
        name: account4.name,
       naira: account4NGN, 
        original: account4.balance, 
        currency: account4.currency };
}

// Print results
console.log("Highest balance: " + highest.name + " with " + highest.naira + " NGN");
console.log("Lowest balance: " + lowest.name + " with " + lowest.naira + " NGN");





// 6. Status check
console.log("--Account Status--");

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


// 7. Final Summary
console.log("--Final Summary ---");

console.log(account1.name + " | Balance: " + account1.balance + " " + account1.currency + " | Type: " + account1.type);
console.log(account2.name + " | Balance: " + account2.balance + " " + account2.currency + " | Type: " + account2.type);
console.log(account3.name + " | Balance: " + account3.balance + " " + account3.currency + " | Type: " + account3.type);
console.log(account5.name + " | Balance: " + account5.balance + " " + account5.currency + " | Type: " + account5.type);