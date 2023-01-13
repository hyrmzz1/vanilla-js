# Assignment7
<img src="./FF417D2D-D43C-471D-A114-F601D7C26A3B.jpeg"/>

## TA's hint
- form<br>
: 사용자로부터 입력받을 수 있는 입력 form을 정의할 때 사용하는 태그. 입력한 정보를 제출할 수 있음.<br>
- querySelector<br>
: CSS 선택자 형식(class->.className, id->#idName, 하위 태그는 띄어쓰기 하고 작성 등..)을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있음.<br>
: 같은 클래스명을 가지고 있을 경우 가장 첫번째 요소만을 가지고 옴. 모든 요소 가져오려면? querySelectorAll 사용.<br>
- preventDefault(): 이벤트(->인수로 들어간다.)마다 가지고 있는 브라우저에서 발생하는 고유 동작(기본 동작)을 막기 위해 사용.<br>
- Math.ceil(): 주어진 숫자 올림. 숫자는 정수 형태로 반환.<br>
- parseInt(): 주어진 문자열을 정수형으로 변환하여 반환.<br>
- innerHTML: 요소 내 포함된 HTML을 나타내는 속성. HTML 읽어들이거나 설정 가능.<br>
- 랜덤한 숫자 찾는 법은 chap6 참고.<br>

## 조건
- 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤한 숫자를 찾기. (음수 포함 X)<br>
- 실시간으로 범위 값을 업데이트할 것.<br>
- user가 숫자를 선택한 후에 게임 플레이 가능<br>
- user에게 게임 승패를 알려야함.

## TIL
- innerHTML vs innerText<br>
```
result.innerHTML = `You chose: ${guessedNum}, the machine chose: ${randomNum}<br>
    <strong>${guessedNum === randomNum? "You won😎" : "You lost👻"}</strong>`;
```
위 코드에서 result.innerText가 아닌 innerHTML을 사용한 이유?<br>
<strong>innerHTML에선 br 이나 strong 같은 html 코드 또는 마크업을 가져오거나 태그와 함께 입력할 수 있기 때문</strong>. tag가 적용되어 출력된다.<br><br>
만약 innerText를 사용했다면?
```
result.innerText = `You chose: ${guessedNum}, the machine chose: ${randomNum}<br>
    <strong>${guessedNum === randomNum? "You won😎" : "You lost👻"}</strong>`;
```
<strong>innerText는 text 값만 다룸.</strong> 따라서 br 이나 strong 등을 적용시키지 않고 text 값으로 인식해 그대로 출력함.
- JS 에선 ==, != 가 아닌 <strong>===, !==</strong> 을 사용한다. 잊지말자!<br>
==은 값만을 비교하고, ===은 값과 자료형 모두를 비교.<br>
===은 JS에서만 사용하는 연산자. ==이 아닌 === 사용을 권장한다.
- <strong>input value의 type은 무조건 string이다.</strong> 이는 input 자체의 type과는 무관!<br>헷갈릴 땐 typeof를 사용하여 input value의 타입 알아보자.
- Math.random()*maxNum 은 0 이상 maxNum 미만의 범위에서 랜덤한 수를 추출한다.<br>
maxNumInput의 value인 maxNum도 string인데, Math.random()*maxNum 은 왜 잘 작동할까?<br>
maxNum 이 number여야 0 <= < maxNum 범위의 랜덤한 수를 추출하는거 아닐까? 
```
const maxNum = maxNumInput.value;
const randomNum = Math.round(Math.random()*maxNum);
``` 
이유는 <strong>Type coercion(유형 강제 변환) 때문. Type conersion(유형 변환)도 참고.</strong>
- 백틱 내부에선 if-else문이 아닌 삼항연산자를 사용하자.<br>
참, 거짓에 문자열이 들어간다면 "" 로 감싸줄 것.