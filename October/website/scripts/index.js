import validator from "https://cdn.jsdelivr.net/npm/validator@13.11.0/+esm";

const emailInput = document.querySelector("#emailInput");
const passwordInput = document.getElementById("passwordInput");
const closedImg = document.getElementById("closedImg");
const closedImgIcon = document.getElementById("closedImgIcon");
const form = document.querySelector("#form");



closedImg.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  closedImgIcon.src =
    passwordInput.type === "password" ? "../assets/svgs/mdi_password.svg" : "../assets/svgs/open-lock.svg";
});


const formCallback = async (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  console.log(validator.isEmail(email));

  if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    const myFetchPromise = fetch("http://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    myFetchPromise.then((response) => {
      return response.json()
    }).then((data) => {
      console.log('Data Saved',data)
    }).catch(err => {
      console.log(err, "error")
    })

    console.log("send to the backend");
  }
};


form.addEventListener("submit", formCallback);

const testPromise = new Promise((resolve, reject) => {

});


console.log('testing out pending state',testPromise)


const mytestPromise = new Promise((resolve, reject) => {
  resolve(1000);
});

console.log("testing out fufilled state", mytestPromise);



const tPromise = new Promise((resolve, reject) => {
  reject(45);
});

console.log("testing out reject state", tPromise);
































































































// Asynchronous Javascript.

// Javascript is single threaded language.
// It can only run one thing at a time. Every task has to wait
// for the previous one to finish before starting

// if you have a long running operation, you app/website would be stuck
// on that operation until it completes. this gives the impression that
// your app is frozen.

// the way javascript handles tasks that take time to complete
// (optimizing an image, reading a large file)
// without blocking the execution of other code is what we call Asynchronous flow

// Asynchronous Patterns

// Events
// Callbacks
// Promises
// Async/Await

// Callbacks
// A callback: is function that is passed as an argument to another
// function and is intended to executed at a later time.

// function longRunningOperation (cb ) {
//     setTimeout(() => {
//       cb("i am done")
//     }, 10000)
// }

// longRunningOperation((p) => { console.log(p)})

// console.log("i am in line 80")

// console.log("this is from line 82")

// challenges in using callbacks for asynchronous javascript

//Promises

// A promise contains both the production code and calls to the consuming code

// const myChocolatePromise = new Promise(function (resolve, reject) {

//     // do your long task
//     reject()
// })

// console.log(myChocolatePromise, ".>>>>>")


// setTimeout(function() {
//     cb('I am hungry')
// }, 2000)

// function cb(value) {
//     displayDiv.innerHTML = value
// }
