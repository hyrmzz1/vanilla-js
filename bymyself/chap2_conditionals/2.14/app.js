const age = parseInt(prompt("Write your age plz🤠"));

console.log(age, typeof age);  
//number 아닌 것을 입력했을 경우 NaN 'number' 라고 출력됨   //NaN의 type은 number이기 때문

if(isNaN(age)){
    console.log("hey.. write in numbers😡");
}else{
    console.log(age, "Thanks!🥴");
}