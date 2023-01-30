const images = ["img01.jfif","img02.jfif","img03.jfif","img04.jfif","img05.jfif","img06.jfif","img07.jfif"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
console.log(chosenImage);   //랜덤으로 잘 뜨는군!   //img01.jfif

//img를 html로 보내려면?
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`; //img/img01.jfif
document.body.appendChild(bgImage); //body에 bgImage 넣어줌.