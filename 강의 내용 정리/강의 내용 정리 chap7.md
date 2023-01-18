# CHAP 7. TO-DO LIST
## 7.0 Setup
todo.js 를 만들고, 우리가 필요한 것을 생각해보자.<br>
todo 입력 -> form, input 필요.<br>
입력한 todo를 list로 만들기 -> ul, li 필요.<br>
// 참고
// <ul>은 unoredered list. <ol>은 ordered list.<br>
// <ul>과 <ol>의 항목들은 <li> 태그 사용하여 작성. //list item

```
//index.html
<form id="todo-form>
    <input type="text" placeholder="write todo and press enter" required>
</form>
<ul id="todo-list></ul>
```
```
//todo.js
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
function paintTodo(newTodo){   // todo를 그리는 역할
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

## 7.3 Saving To-Do
## 7.4 Loading To-Do (1)
## 7.5 Loading To-Do (2)
## 7.6 Deleting To-Do (1)
## 7.7 Deleting To-Do (2)
## 7.8 Deleting To-Do (3)