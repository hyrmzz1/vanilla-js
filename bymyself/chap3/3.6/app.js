const text = document.querySelector("h1.hello:nth-child(2)");
//h1이랑 .hello 사이 띄어쓰기 없어야 함.
console.log(text);  //<h1 class="hello">hello2</h1>
console.dir(text);

function handleWindowClick(){
    //화면(h1 부분 외) 클릭시 text 만 색상 green<->yellow 번갈아가며 바뀌게 해보자.
    const currentColor = text.style.color;
    let newColor; //newcolor 계속해서 재할당되니까 let으로 정의
    
    if (currentColor === "darkorange"){ //JS에선 == 써야하는 경우에 === 사용.
        newColor = "olive";         //이건 === 아니라 대입!
    }else{
        newColor = "darkorange";
    }
    text.style.color = newColor;
    //이 코드를 여기에 적는 이유는 if-else 거치며 초기화 값 할당받기 때문.
    //"green", "yellow" 라는 value가 담긴 변수 newColor가 text.style.color 로 대입되며 currentColor 변화함.
    //currentColor 자체는 const라 여기에 다이렉트로 newColor 넣는건 X.
}

window.addEventListener("click", handleWindowClick);  //이벤트명은 ""안에, 함수명은 그냥 작성.