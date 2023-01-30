const age = parseInt(prompt("How old are you? -drink seller🤠"));

console.log(age);

if(isNaN(age) || age <= 0){
    console.log("hey.. write in real positive numbers😡");
}else if(age<20){
    console.log("Come after you become an adult🤬");
}else if(age>60){
    console.log("How about stop drink?😓");}
// else if(age>60 && age>100){
//     console.log("Really?😨");}
// 100세 이상 작성시 How about stop drink?😓 출력된다.
// else if(age>100){console.log("Really?😨");} 를 (age>60) 조건 위에 작성하면 된다.
else{  // age<20 && age>60
    console.log("Pick whatever you want!🍺");
}

//else if 띄어쓰기 조심