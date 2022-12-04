const headline = document.getElementById("whoAmI");
const className = document.getElementsByClassName("iAm");

console.log(headline);      //"양혜림" 출력

console.dir(headline);

headline.innerText = "양혜림";  //dir 통해서 element 확인 + 이용. html 덮어써버리기
console.log(className);     //className은 array이기 때문에 className.~~ 이용 불가.