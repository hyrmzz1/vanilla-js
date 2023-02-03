# CHAP 7. TO-DO LIST
## 7.0 Setup
todo.js 를 만들고, 우리가 필요한 것을 생각해보자.<br>
todo 입력 -> form, input 필요.<br>
입력한 todo를 list로 만들기 -> `<ul>, <li>` 필요.<br><br>
참고<br>
`<ul>`은 unoredered list. `<ol>`은 ordered list.<br>
`<ul>`과 `<ol>`의 항목들은 `<li>` 태그 사용하여 작성. //list item
<br>

```
// index.html
<form id="todo-form>
    <input type="text" placeholder="write todo and press enter" required>
</form>
<ul id="todo-list></ul>
```
```
// todo.js
const todoForm = document.~;    // html의 form과 ul을 js에 연결. 
const toDoList = document.~;    // querySelector 보단 getElementId 사용이 더 편할듯
const todoInput = todoForm.querySelector("input");
//const todoInput = document.querySelector("#todoForm input"); 와 같음.

function handleTodoSubmit(event){
    event.preventDefault(); // form의 기본동작 막기 (=페이지 새로고침)
    const newTodo = todoInput.value;    // input을 입력하면 그 value 저장하기
    todoInput.value = "";   // input submit 후 input 비어보이게. 기본동작 막아져서 입력한 input 그대로 input창에 계속 존재하기 때문.
}

todoForm.addeventListener("submit", handleTodoSubmit);
```

## 7.1 Adding To-Do
todo를 input에 입력한 후 submit 하면 input 하단에 작성했던 todo가 뜨도록 해보자.
```
// todo.js
function paintTodo(newTodo){   // todo를 그리는 역할.
    /* 
    ()안의 newTodo는 그냥 text. 아래 함수의 변수 아님!
    그럼에도 위의 parameter가 handleTodoSubmit()에서 선언된 변수 newTodo처럼 작동하는 이유?
    handleTodoSubmit() 내의 paintTodo(newTodo); 코드 때문. 이 코드가 보내준 것임! 
    */
    const li = document.createElement("li");        // <ul id="todo-list></ul> 내부에 들어갈 <li>를 만들어줌
    const span = document.createElement("span");    // <span>을 만들어줌.
    li.appendChild(span);   // <li><span></span></li>가 되도록. <span>을 <li>의 자식으로 만듬.
    span.innerText = newTodo;   // todoInput에 입력된 값을 span으로
    todoList.appendChild(li);   // <li>를 todoList의 자식으로. <ul id="todo-list><li><span></span></li></ul> 가 되도록.
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

```
문제점
- todo 삭제 불가
- 새로고침 할 시 todo 저장 안됨.

## 7.2 Deleting To-Do
todo 옆에 x 버튼을 만들어, 누르면 todo가 지워지도록 해보자.<br>
-> x 버튼은 click event를 기다려야!
```
<ul id="todo-list>
    <li>
        <span></span>   // newTodo가 여기에 들어감. js 코드 통해 구현 완료. (lec #7.1)
        <button>X</button>  // 이걸 js 로 구현해보자.
    </li>
</ul>
```
```
// todo.js
function deleteTodo(event){     // () 내부에 event를 넣음으로써 event에 대한 정보 얻을 수 있다.
    const li = event.target.parentElement;  // 어떤 li 옆의 btn이 클릭됐는지 파악가능한 변수
    li.remove();    // 해당 li 삭제
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);  // 버튼 클릭시 todo 삭제되는 이벤트 만들기.
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);    //<ul><li><span></span><btn></btn></li></ul>
}
```

## 7.3 Saving To-Do
todo를 실제로 저장되게 해보자. (새로고침해도 사라지지 않도록)<br>
-> 브라우저에 저장하려면? Local Storage 사용!

순서) todo 저장(local storage에) -> todo 불러오기 (화면에 표시) //이번 강의에선 todo 저장하는 법을 배운다.

todo를 array로 만들자. todo가 입력(submit)되면 array로 push 되게끔!<br>
localStorage엔 array 저장 불가. 텍스트만 저장 가능.<br>
-> saveTodos() function을 생성해<br>
-> 저장만 할 뿐 새로고침시 화면에 나타나진 않음.<br>

a,b,c 에서 ["a","b","c"]로 나타나게 array로 저장하려면? 일단 JSON.stringify(); 사용.<br>
// 뭐든 string으로 바꿔줌. string으로 바뀌면 중복도 가능
// a,b,c 로 나타날 땐 a 다시 치면 a로 바뀜.

## 7.4 Loading To-Do (1)
순서) todo 저장(local storage에) -> todo 불러오기 (화면에 표시) // local storage에만 있는 todo를 화면으로 불러오자.

## 7.5 Loading To-Do (2)

## 7.6 Deleting To-Do (1)
문제점
todo를 화면에서 지워도 local storage엔 그대로 존재.
같은 내용의 todo가 여러개일 경우 local storage에서 어떤 걸 삭제해야하는지 모름. 
-> todo에게 id 부여. text가 아닌 object로 만들자.
[{"a","b","c","a"}] 에서 [{id:~~, text:"a"}] 같이.
id는 랜덤하게.  //id로 각각의 li item을 구분한다.

x를 눌러을때 li가 삭제되려면 그 id를 알아야한다.

## 7.7 Deleting To-Do (2)
array에서 item을 삭제하는 법을 알아보자.
-> 삭제하려는 item을 제외하고 새로 array를 만드는 것!!

`filter()` 는 `forEach()`와 비슷하다.

`filter()`를 사용할 때, array의 item을 유지하고 싶다면 함수 내에서 true를, 유지하고 싶지 않다면 false를 return하면 된다.
```
const arr = ["1","2","3","4"];

funcion sextFilter(talkingPotato){return !== 3;} // ()안의 문구는 뭐가 됐든 상관없음. 차피 js가 array의 각 item을 이 함수의 첫번째 인자로 전달해주니까.

arr.filter(sexyFilter); // ["1","2","4"]
```
```
const arr = [234, 22234, 331, 4352, 462, 98765, 4544]

function sexyFunc(tomato){return tomato >= 1000;}   //return 값이 true인 item들만 반환된다.

arr.filter(sexyFunc);   // [22234, 4352, 98765, 4544]
```

```
const todo = [{text:"haha"}, {text:"hoho"}];

function sexyFilter(deltodo){    // deltodo가 들어가있는 () 안엔 아무 문구나 들어가도 된다.
    return deltodo.text !== "hoho"; // array(todo)의 각 item이 인수로 전달됨. text가 hoho가 아니여야 true.
}

todo.filter(sexyFilter);    //[{text:"haha"}]
```

## 7.8 Deleting To-Do (3)
지울 때마다(X를 클릭할 때마다) 해당 li가 다른 id를 가졌다는 것을 알 수 있고, id 통해 local storage에서도 해당 todo 삭제 가능.

id는 number이므로 parseInt 통해 타입 변환해주기.