const loginInput = document.querySelector("form#login-form input");
const loginBtn = document.querySelector("form#login-form button");

function onLoginBtnClick(){
    console.log("hello", loginInput.value);
}

loginBtn.addEventListener("click", onLoginBtnClick);
