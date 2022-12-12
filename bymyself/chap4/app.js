const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
/* 이 코드와 같음. loginForm 의 경우 document.getElementById("#login-form"); 로도 작성 가능.
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
*/
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  // hidden 반복적으로 쓰이니 변수화. 오타날 수 있으니까.
const USERNAME_KEY = "username";
/* 변수명을 대문자로 쓰는 경우?
1) string만 포함된 변수
2) 중요한 변수가 아닐 때 (loginForm, loginInput 같은 것들은 중요한 변수.) */

// querySelector 안에선 CSS selector 방식으로 검색. #~~ -> id / .~~ -> class

function onLoginSubmit(event){
    event.preventDefault(); // 브라우저의 기본 작동을 멈춰줌 (= 새로고침)
    console.log(event);     // 새로고침 막힌 상태이므로 이 코드 실행됨.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    console.dir(loginInput);    // 이 코드를 통해 input에 입력된 값은 "value" property임을 알 수 있다.
    console.dir(greeting);      // 이 코드를 통해 "innerText" property에 h1 내용 작성됨을 알 수 있다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //("key", "value") username이란 키에 loginInput.value를 값으로 넣어줌.
    showGreeting(username);
}

function onLinkClick(event){
    event.preventDefault();     // 이 코드 덕에 링크로 이동 멈추고 아래 코드들 실행된다.
    alert("ready, set, go!");   // preventDefault() 없이는 해당 alert 누르면 바로 링크페이지로 이동.
    console.dir(event);         // preventDefault() 없이는 이거 뜨자마자 창 이동-> error 발생
}

link.addEventListener("click",onLinkClick);

function showGreeting(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${name}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){  // username !== USERNAME_KEY. username === null은 입력된 값이 null이라는 값이란 의미.
    //login-form 나타나도록
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //login-form은 숨기고 h1(greeting) 바로 뜨도록
    showGreeting(savedUsername);
}