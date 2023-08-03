let submitTodo = document.getElementById("todo-submit");
let TodoList= document.getElementById("todo-container");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
const TodoListArray = [];
// TODO ADD STATUS LOCALESTORAGE TRUE OR FALSE
// IF TRUE GREEN FALSE WHTIE

window.addEventListener("load",function(){
const storedItems = JSON.parse(localStorage.getItem("todo-items"));
console.log(storedItems);
for(let a=0;a<li.length;a++){
  let todo=this.document.querySelectorAll(".todo-name")[a];
    li[a].setAttribute("id", "todo-item-" + a);
    const newItem = {
      id: a,
      name: todo.innerHTML,
      status:false,
    };
    TodoListArray.push(newItem); 
  
}

for(let y=TodoListArray.length;y<storedItems.length;y++){
  const newItem = {
    id: storedItems[y].id,
    name: storedItems[y].name,
    status:storedItems[y].status,
  };
  TodoListArray.push(newItem); 
}



RefreshTodoList();
});







submitTodo.addEventListener("click",function(){
let input= document.getElementById("todo-input");
    
const lastId = TodoListArray.length > 0 ? TodoListArray[TodoListArray.length - 1].id : -1;
const newId = lastId + 1;
const newItem = {
    id: newId,
    name: input.value,
    status:false,
  };
  TodoListArray.push(newItem);  
  localStorage.setItem("todo-items",JSON.stringify(TodoListArray));
  RefreshTodoList();

  
});



function RefreshTodoList(){
     let ul = document.querySelector("ul");
     var child = ul.lastElementChild; 
     while (child) {
        ul.removeChild(child);
         child = ul.lastElementChild;
     }
    localStorage.setItem("todo-items",JSON.stringify(TodoListArray));
    const storedItems = JSON.parse(localStorage.getItem("todo-items"));
    for(let i=0;i<storedItems.length;i++){
      
        let TodoItem = document.createElement("li");
        let todoName = document.createElement("span");
        let todoClose = document.createElement("div");

        TodoItem.className = "todo-item";
        TodoItem.id = "todo-item-"+storedItems[i].id;
        todoName.innerHTML=storedItems[i].name;
        todoName.className="todo-name";
        todoClose.className="close-btn";
        todoClose.id="close-btn-"+storedItems[i].id;

        TodoItem.addEventListener("click",function(){   
            style(storedItems[i].id);
        });
        
        
        todoClose.addEventListener( 'click', function(){
            for(let x=0;x<TodoListArray.length;x++){
              if(TodoListArray[x].id==storedItems[i].id){
                TodoListArray.splice(x,1);
                RefreshTodoList();
              }
            }
          } );

        TodoItem.appendChild(todoName);
        TodoItem.appendChild(todoClose);
        TodoList.appendChild(TodoItem);
      
    }
}

function style(id){
  console.log("styled çalıştı");
  const storedItems = JSON.parse(localStorage.getItem("todo-items"));
const item = document.getElementById("todo-item-"+id);
const computedStyle = window.getComputedStyle(item);
const backgroundColor = computedStyle.backgroundColor;
const hex= rgbToHex(backgroundColor);
console.log(backgroundColor);
console.log(hex);




if(hex=="#FFFFFF"){
item.style.backgroundColor="#C4FE76";
item.style.textDecoration="line-through";
for(let y=0;y<storedItems.length;y++){
  if(id==storedItems[y].id){
  TodoListArray[y].status=true;
  localStorage.setItem("todo-items",JSON.stringify(TodoListArray));
  }
}
}
else{
  item.style.backgroundColor="#FFFFFF";
  item.style.textDecoration="none";
  for(let y=0;y<storedItems.length;y++){
    if(id==storedItems[y].id){
      TodoListArray[y].status=false;
      localStorage.setItem("todo-items",JSON.stringify(TodoListArray));
    }
  }
}

console.log(storedItems);
}

function rgbToHex(rgb) {
  // rgb formatındaki rengi parçalara ayırma
  const rgbParts = rgb.substring(rgb.indexOf('(') + 1, rgb.lastIndexOf(')')).split(',');

  // R, G ve B değerlerini 16'lık tabandaki renk kodlarına dönüştürme
  const r = parseInt(rgbParts[0]).toString(16).padStart(2, '0');
  const g = parseInt(rgbParts[1]).toString(16).padStart(2, '0');
  const b = parseInt(rgbParts[2]).toString(16).padStart(2, '0');

  // HEX formatındaki renk kodunu oluşturma
  const hexColor = `#${r}${g}${b}`;

  return hexColor.toUpperCase(); // HEX değerini büyük harfle döndürme (isteğe bağlı)
}














