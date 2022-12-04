// <⚠️ DONT DELETE THIS ⚠️>
// import "src/styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it. //mouseenter
✅ The text of the title should change when the mouse is leaves it. //mouseleave
✅ When the window is resized the title should change. //resize
✅ On right click the title should also change. //contextmenu

✅ ALL function handlers should be INSIDE of "superEventHandler" ⭐⭐⭐⭐⭐
*/

const title = document.querySelector("body h2");
console.dir(title); //이걸 통해 이벤트 명이나 innerText 등 elements 확인 가능하다.

//superEventHandler를 ⭐object⭐라고 생각.
//object는 ⭐Key:Value⭐ 형식. Key에 함수이름, Value에 함수 바디 넣는다고 생각.
//const objectName = {property1: function~, property2: function~, property3: function~, ..}
//chap2 calculator 도 이 형식으로 코드 작성했었다.
const superEventHandler = {
    handleMouseEnter: function(){
        title.innerText = "The mouse is here!";   //title에 바로 문구 대입하는거 아님. title = "~" (X)
        title.style.color = colors[0];  //색상 복붙하지 말고 위 colors 배열 이용! []는 배열 나타내는 기호.
    },  // 함수들 사이 콤마 필수!⭐

    handleMouseLeave: function(){
        title.innerText = "The mouse is gone!";
        title.style.color = colors[1];
    },

    handleWindowResize: function(){
        title.innerText = "You just resized!";
        title.style.color = colors[2];
    },
    
    handleWindowRightClick: function(){
        title.innerText = "That was a right click!";
        title.style.color = colors[4];
    }
};

//object 내에 있는 함수 사용할 땐 objectName.propertyName 꼴로 작성
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
//window => 현재 스크립트가 작동 중인 창을 나타내는 객체
window.addEventListener("resize",superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleWindowRightClick);