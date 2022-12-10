const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

/* 이 코드와 같음. loginForm 의 경우 document.getElementById("#login-form"); 로도 작성 가능.
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
*/

// querySelector 안에선 CSS selector 방식으로 검색. #~~ -> id / .~~ -> class

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 작동을 멈춰줌 (= 새로고침)
    console.log(event);     // 새로고침 막힌 상태이므로 이 코드 실행됨.
}
// onLoginSubmit 함수 호출시 ()안의 argument 담아서 호출.
// 위 argument는 event object를 담은 정보들.

loginForm.addEventListener("submit",onLoginSubmit);