const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

/* 이 코드와 같음. loginForm 의 경우 document.getElementById("#login-form"); 로도 작성 가능.
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
*/

// querySelector 안에선 CSS selector 방식으로 검색. #~~ -> id / .~~ -> class

function onLoginBtnClick(){
    console.log("hello ", loginInput.value);
    console.log(`hi ${loginInput.value}`);
}

loginBtn.addEventListener("click", onLoginBtnClick);