/* className은 하나만 지정할 수 있어 class name을 변경할 경우 처음의 class name 잃음
classList는 여러 class name 포함할 수 있다.
모든 class name이 교체되지 않을 수 있는 방법이다!!
*/

const text = document.querySelector("div.hello:nth-child(2) h1");
console.log(text);

function handleTitleClick(){
//    const clickedClass = "clicked"
//     if(text.classList.contains(clickedClass)){  //클래스 존재여부 확인
//         text.classList.remove(clickedClass);    //하나의 클래스만 삭제 가능.
//     }else{
//         text.classList.add(clickedClass);       //원래 가지고 있던 클래스 안날리고 추가 가능.
//     }
// }

// 위 코드를 구현하는 함수; toggle()
// toggle은 이벤트 존재유무 확인 후 없으면 만들고, 있으면 없앤다.

    text.classList.toggle("clicked");
}

text.addEventListener("click", handleTitleClick);