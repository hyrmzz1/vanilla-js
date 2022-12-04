const remain_time = document.querySelector("#d-day");
const today = document.querySelector("#today");

//remain_time
function until_xmas(){
    const xmas = new Date("2022-12-25");
    /*연도를 현재 연도로 설정하려면
    const xmas = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`); */
    const today_date = new Date();
    const diff = xmas - today_date;
    //console.log(diff);  //diff는 ms 단위. => 일 시 분 초 모두 1000 나눠주기
    //const diff = new Date(xmas - today_date); 로 해도 된다.
    const until_date = String(Math.floor(diff / (1000*60*60*24))).padStart(2, "0");     //일
    const until_hours = String(Math.floor((diff / (1000*60*60)) % 24)).padStart(2, "0");//시간
    const until_min = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");   //분
    const until_sec = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");            //초
    //Math.floor()는 소수점 버림.
    //Math.floor(-5.05) 는 -6

    /*
    입력받은 초(diff. ms)를 일/시/분/초 로 나타내는 방법
    const secondsInMs = Math.floor(diff / 1000);    //입력받은 ms를 s로 변환한다.
    const minutesInMs = Math.floor(secondsInMs / 60);   //입력받은 s을 60으로 나눈 몫이 m. (1분은 60초)
    const hoursInMs = Math.floor(minutesInMs / 60);     //m을 60으로 나눈 몫이 h. (1시간은 60분)
    const days = Math.floor(hoursInMs / 24);            //h를 24로 나눈 몫이 d. (1일은 24시간)
    const seconds = secondsInMs % 60;                   //26~28 줄 주의 !!
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24; 
    */

    remain_time.innerText = `${until_date}d ${until_hours}h ${until_min}m ${until_sec}s`;
}

//today
function getToday(){
    const today_date = new Date();
    const year = today_date.getFullYear();
    const month = today_date.getMonth();
    const date = today_date.getDate();
    const hour = String(today_date.getHours()).padStart(2, "0");
    const min = String(today_date.getMinutes()).padStart(2, "0");
    const sec = String(today_date.getSeconds()).padStart(2, "0");
    
    today.innerText = `Today is ${year}/${month}/${date} ${hour}:${min}:${sec}`;
}

getToday();
setInterval(getToday, 1000);
until_xmas();
setInterval(until_xmas, 1000);
