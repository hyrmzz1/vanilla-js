//JS에 색상명, style명 작성 X => 이건 CSS에 작성!
const text = document.querySelector("div.hello:nth-child(2) h1");

console.log(text);  //<h1 class="hello">hello2</h1>
console.dir(text);

function handleTitleClick(){
    const clickedClass = "clicked sexy-font"
    //raw string 변수화하면 에러 파악 수월
    //매번 JS에 class name 추가하는 방식은 별로. => classList 사용. => lec 3.8!!
    if(text.className === clickedClass){    ///=== 와 = 사용하는 경우 명확히 구분
        text.className = "";
    }else{
        text.className = clickedClass;
    }
    //h1에 원래 className이 존재했더라도 그거 초기화<->clicked 번갈아 가는걸로 바뀜.
}

text.addEventListener("click", handleTitleClick);