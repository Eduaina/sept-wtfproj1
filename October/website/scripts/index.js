const email = document.getElementById('email');
const passwordInput = document.getElementById("passwordInput");
const closedImg = document.getElementById("closedImg");
const closedImgIcon = document.getElementById("closedImgIcon");
const submit = document.getElementById("submit");


closedImg.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  closedImgIcon.src = passwordInput.type === "password" ? "../assets/svgs/mdi_password.svg": "../assets/svgs/open-lock.svg";
});


const myPromise = new Promise((resolve, reject) => {
  resolve(100);

  setTimeout(() => {}, 1000)
})

myPromise.then