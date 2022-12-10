const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

/* 이 코드와 같음. loginForm 의 경우 document.getElementById("#login-form"); 로도 작성 가능.
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
*/

// querySelector 안에선 CSS selector 방식으로 검색. #~~ -> id / .~~ -> class

function onLoginBtnClick(){
    const userName = loginInput.value; //loginInput.value를 변수화
    console.log("hello ", userName);
    console.log(`hi ${userName}`);
}
/* userName에 아무 값도 작성되지 않은 상태로 loginBtn 눌렀을 땐 console.log 작동함.
-> 이땐 required라는 유효성이 작성된 것이고, form이 submit된 게 아니기 때문에 브라우저 새로고침되지 않았기 때문.
 */
loginBtn.addEventListener("click", onLoginBtnClick);