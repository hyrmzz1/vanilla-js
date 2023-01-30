/*
연습할 이벤트
- online / offline
- background color
나머지는 assignment4 에서 다 적용해봤음.
*/

console.dir(window);

const title = document.querySelector("h1");
console.log(title);
console.dir(title);

function handleWindowOnline(){
    alert("We're on the network now!😝");
}
function handleWindowOffline(){
    alert("We need to connect to the network! - offline now😴 -");
}
function handleMouseClick(){
    document.body.style.backgroundColor = "black";
    title.style.color = "white";
}
function handleMouseLeave(){
    document.body.style.backgroundColor = "gray";
    title.style.color = "white";
}
//console.dir(title); 통해 element 확인했는데, color 요소는 style 내에 있음.
//=> 코드 작성시 title.color 가 아닌 title.style.color 라고 작성.
//window 의 backgroudcolor 변경시에도 마찬가지다.
//window 관련은 document.~ 로 시작 (document는 우리의 웹사이트를 의미하므로.)
//document 안의 body 안의 style 이므로 document.body.style.~ 로 작성!⭐

window.addEventListener("online",handleWindowOnline);
window.addEventListener("offline",handleWindowOffline);
title.addEventListener("mouseenter",handleMouseClick);
title.addEventListener("mouseleave",handleMouseLeave);