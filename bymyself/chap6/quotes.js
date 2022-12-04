const quotes = [
    {
        quote:"산다는 것, 그것은 치열한 전투이다.",
        author:"로망로랑",
    },
    {
        quote:"신은 용기 있는 자를 결코 버리지 않는다.",
        author:"켄러",
    },
    {
        quote:"인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author:"L.론허바드",
    },
    {
        quote:"모든 인생은 실험이다 . 더 많이 실험할수록 더 나아진다.",
        author:"랄프 왈도 에머슨",
    },
    {
        quote:"계단을 밟아야 계단 위에 올라설 수 있다.",
        author:"튀르키예 속담",
    },
    {
        quote:"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author:"앙드레 말로",
    },
    {
        quote:"좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실해야 한다.",
        author:"단테",
    },
    {
        quote:"행복은 습관이다. 그것을 몸에 지녀라.",
        author:"허버드",
    },
    {
        quote:"성공의 비결은 단 한 가지. 잘 할 수 있는 일에 광적으로 집중하는 것.",
        author:"톰 모나건",
    },
    {
        quote:"자신감 있는 표정을 지으면 자신감이 생긴다.",
        author:"찰스다윈",
    },
]   //object 10개

const quote = document.querySelector("#quote span:first-child"); //id는 #, class는 .
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0-9]); 처럼 하기 위해 [] 안에 0~9 사이의 숫자를 넣어보자 => random 이용

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
//0<= <quotes.length 범위 내의 수만큼 반복. (10 미만의 정수)

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;