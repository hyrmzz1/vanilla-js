const clock = document.querySelector("#clock"); //h1#clock 이라 적어도 된다.
console.log(clock);

function getClock(){
    const date = new Date();    //Date(); 'Thu Nov 03 2022 00:31:41 GMT+0900 (한국 표준시)'
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${min}:${sec}`;
    // console.log(`${hour}:${min}:${sec}`);
    //백틱(`) 사용시 그 안에 표현식(${})이 사용가능하다. 
    //백틱이 없었다면 표현식과 문자열 사이를 + 로 연결해야했다! 개귀찮..
    //date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    //${}의 결과는 문자열로 자동 변환됨.
    //date.getHours() 는 number. string 함수 padStart 쓰려면 String() 안에 넣어서 type number에서 string으로 바꾸기 
}

getClock(); //맨처음 새로고침한 시간
setInterval(getClock, 1000);  //setInterval(호출할 함수명, 몇 ms마다 실행시킬지)