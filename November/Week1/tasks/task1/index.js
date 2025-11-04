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