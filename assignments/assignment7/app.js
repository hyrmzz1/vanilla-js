const guessNumForm = document.querySelector("form");
const guessedNumInput = document.querySelector("#guessedNum");
const maxNumInput = document.querySelector("#maxNum");
const result = document.querySelector("#gameResult");   // id는 #, class는 .

const HIDDEN_CLASSNAME = "hidden";  // 여러번 사용되는 string은 변수화.(대문자로)

function onNumSubmit(event){
    // 기본동작 막기. form의 기본동작은 submit.
    // submit은 엔터를 누르거나 버튼을 클릭할 때 발생.
    // submit되면 새로고침되며 입력받은 input value(여기선 guessedNum)이 사라짐 
    event.preventDefault();

    // span에는 guessedNum 값 출력되야함.
    const guessedNum = guessedNumInput.value;
    const maxNum = maxNumInput.value;
    result.innerHTML = `You chose: ${guessedNum}, the machine chose: ${Math.round(Math.random()*maxNum)}`;
    /* 0부터 maxNum 사이 float 랜덤으로 얻음.
    정수로 바꾸려면 floor(내림), round(반올림), ceil(올림) 써야하는데
    floor 쓸 경우 maxNum이 안나오고, ceil 쓸 경우 0 나올 가능성 넘 적어져서 round 사용했음.*/
    //innerText vs innerHTML?

    // you won - you lost는 조건문 사용

    // play 버튼 누르면 #gameResult span 내부 글씨 보이게
    result.classList.remove(HIDDEN_CLASSNAME);

}

guessNumForm.addEventListener("submit", onNumSubmit);