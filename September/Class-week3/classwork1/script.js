
// Q2. Implement a simple to-do items list

let ToDo = [];


const addToDo = (item) => {
    const list = item;
     ToDo.push(list)
     return ToDo;
}

console.log(addToDo("Groceries"));
console.log(addToDo('Toileteries'));
console.log(addToDo("Buy a Car"));



// Q1. Implement a simple add to cart feature.

const cart = [];

const addToCart = (name, item1, item2, item3) => {
    const feature = {name: name, item1: item1, item2: item2, item3: item3}
    cart.push(feature);
    console.log(cart);
    
}

addToCart("Joan", "Bag", "House", "PrivateJet");
addToCart("Ramota", "Wristwatch", "Mustang", "Airport");
addToCart("Temi", "Fortune-500", "shoes", "Earth");
addToCart("Resort", "Island", "New-Macbook", "Sleep-pod");



















const bankAccount = [];

const addBankAccount = (name, balance) => {
  const account = { name: name, balance: balance }; // local variable (local scope)
  bankAccount.push(account); // global variable // global scope
};

function bankTransfer(sender, receiver, amount) {
  const senderAccount = bankAccount.find(function (account) {
    if (account.name === sender) {
      return true;
    }
    return false;
  });
  const receiverAccount = bankAccount.find(function (account) {
    if (account.name === receiver) {
      return true;
    }
    return false;
  });
  console.log("Sender Account", senderAccount)
  console.log("Receiver Account", receiverAccount)
}

console.log(bankAccount.length, "before adding");
addBankAccount("Mike", 202);
addBankAccount("Luke", 202);
addBankAccount("Princess", 100000);
console.log(bankAccount.length, "after adding");
console.log(bankAccount, "view");

bankTransfer("Mike", "Lukes", 100);

// Q1. Implement a simple add to cart feature.
// Q2. Implement a simple todo items list