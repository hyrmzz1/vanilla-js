const h1 = document.querySelector("h1");
//css에서 h1 color white로 바꾸기

//배경 색: 노랑(화면 75%~100%)->보라(화면 50%~75%)->하늘(화면 ~50%)
function handleWindowResize(){
    let inWidth = window.innerWidth; // 값 계속 변하니까 let으로 정의.

    if(inWidth > 1200 ){
        document.body.style.backgroundColor = "blue";
    }else if(inWidth > 650){    //inWidth <= 1200 && inWidth > 650 이랑 같은 의미
        document.body.style.backgroundColor = "yellow";
    }else{
        document.body.style.backgroundColor = "purple";
    }
}

window.addEventListener("resize", handleWindowResize);

/*
if... else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문입니다. 참고 자료
classList : 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해 줍니다. 참고 자료
remove : classList의 메서드입니다. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의 참고 자료에서 확인할 수 있습니다.
add : classList의 메서드입니다. classList의 리스트에 원하는 클래스를 추가할 수 있습니다. classList의 참고자료에서 확인할 수 있습니다.
innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다. 참고자료
*/