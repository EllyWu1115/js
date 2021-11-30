document.addEventListener("DOMContentLoaded", () =>{
  const taskInput = document.querySelector("#taskInput");
  const todoList = document.querySelector("#todo-list");

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
      //1.建立(元素) todo item
      const todo = document.createElement("div");
      todo.innerText = e.target.value;
      todo.className = "todoItem";

      //3.多了差差
      const colseBtn = document.createElement('button')
      colseBtn.innerText = 'x'
      todo.appendChild(colseBtn);


      todoList.appendChild(todo);
      
      //2.消掉
      e.target.value =''
    }
  });
});