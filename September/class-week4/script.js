const eyeArea = document.querySelector('.eye-area')
eyeArea.addEventListener('click', ()=>{
    if (password.type === "password") {
        password.type = "text"
        hiddenEye.style.display = "none"
        showEye.style.display = "block"
    } else {
        password.type = "password"
        hiddenEye.style.display = "block"
        showEye.style.display = "none"
    }
})
// hiddenEye
// showEye