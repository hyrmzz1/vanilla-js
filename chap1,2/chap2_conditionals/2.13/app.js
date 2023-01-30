// const age = prompt("how old are you?");
// console.log(age, typeof age); => 결과: 24 string

const age = parseInt(prompt("how old are you?😎"));
console.log(age, typeof age);   //24 'number'


const age2 = prompt("how old are you?👻");
console.log(age2, typeof age2, parseInt(age2), typeof parseInt(age2));
//24 string 24 number
//hyerim string NaN number //typeof parseInt("hyerim")이 number로 출력되는 이유는 typeof NaN === "number"이기 때문이다.

//parseInt는 변수 정의하는 곳에서 사용해도 되고, console.log 안에서 사용해도 된다.