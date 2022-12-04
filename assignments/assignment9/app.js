/*
사용자가 버튼을 클릭하면 colors배열에서 두 가지 색상이 랜덤으로 선택되어야 합니다.
body태그의 style을 랜덤으로 선택된 두 가지 색상을 사용해 linear-gradient로 변경하세요.

TA's 힌트
linear-gradient / Math.floor() / Math.random() / length 이용
*/
const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const body = document.querySelector("body");
const btn = document.querySelector("button");

console.dir(body);

function handleBtnClick(){
    const chosenColor1 = colors[Math.floor(Math.random()*colors.length)];
    const chosenColor2 = colors[Math.floor(Math.random()*colors.length)];
    
    if (chosenColor1 === chosenColor2) {    //랜덤으로 지정된 색이므로 같을 수 있음. 그라데이션 보이게 다른 색으로 지정!
        return handleClick();
    }

    body.style.background = `linear-gradient(to left, ${chosenColor1}, ${chosenColor2})`;
    //body의 배경색 바꿔야하니까 밖에서 const body 로 정의
    //body 위에서 정의 안하고 바로 document.body.style.backgroundImage 로 적용해도 된다.

    //linear-gradient는 backgroundColor 가 아니라 background 또는 backgroundImage에 적용해야 함.
    //background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
    //linear-gradient 함수의 인수로 위에서 정의해놓은 변수 사용해야하므로 백틱으로 전체 감싼 후 ${변수}
}

btn.addEventListener("click", handleBtnClick);
