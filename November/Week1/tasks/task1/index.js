// Task 1
const questionSpace = document.getElementById('question');
const responseSpace = document.getElementById('response');

const name = prompt('Name');
const age = Number(prompt("How old are you"));
let voteStatus;

if(age < 18) {
    voteStatus = `${name} you are too young to vote`;
}else if(age < 64) {
    voteStatus = `${name} you are eligible to vote`;
}else {
    voteStatus = `${name} you are a senior citizen voter`;
}

questionSpace.innerText = age;
responseSpace.innerText = voteStatus;


// Task 2
//Even numbers
const evenNumbers = document.getElementById('evenNumber');
const oddNumbers = document.getElementById("oddNumber");

let even = [];

for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        even.push(i)
    }
}

evenNumbers.innerText = even;

// Odd numbers

let odd = [];

for (i =1; i <= 20; i++) {
    if(i % 2 !== 0) {
        odd.push(i)
    }
}

oddNumbers.innerText = odd;

// task 3
const whileLoop = document.getElementById('while');

let count = 1;
let result = '';

while(count <= 10) {
    result += count + ' ';
    count++;
}

whileLoop.innerText = result;

// task 4
const switchedStatement = document.getElementById('switch');
let num = Number(prompt("Enter a number from 1 - 7"));
let day;

switch (num) {
  case 1:
    day = `You've picked Monday`;
    break;
  case 2:
    day = `You've picked Tuesday`;
    break;
  case 3:
    day = `You've picked Wednesday`;
    break;
  case 4:
    day = `You've picked Thursday`;
    break;
  case 5:
    day = `You've picked Friday`;
    break;
  case 6:
    day = `You've picked Saturday`;
    break;
  case 7:
    day = `You've picked Sunday`;
    break;
  default:
    day = "Invalid day number!";
}

switchedStatement.innerText = day;