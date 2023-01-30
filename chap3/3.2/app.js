//배열의 첫번째 element를 사용하게 해주는건 querySelector!
//array를 반환하지 않는다.
//CSS와 표기법 같다!
//querySelector 괄호 안에는 "" 씌워주기.

const hi = document.querySelector(".hello h1"); 
console.log(hi);

const hiAll = document.querySelectorAll(".hello h1");
console.log(hiAll);

const hello = document.querySelector("#hello h1"); 
console.log(hello);

const merong = document.querySelector("#hello h2:first-child"); 
console.log(merong);

const meron = document.querySelector("#hello h2:nth-child(2)"); 
console.log(meron);