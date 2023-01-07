// play 버튼 누르면 #gameResult span 내부 글씨 보이게
// span 에는 guessedNum 값 출력되야함.
// you won - you lost는 조건문 사용해야 할듯.
const guessNumForm = document.querySelector("form");

function onNumSubmit(event){
    // 기본동작 막기. form의 기본동작은 submit.
    // submit은 엔터를 누르거나 버튼을 클릭할 때 발생.
    // submit되면 새로고침되며 입력받은 input value(여기선 guessedNum)이 사라짐 
    event.preventDefault();
}

guessNumForm.addEventListener("submit", onNumSubmit);