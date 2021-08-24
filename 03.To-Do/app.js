//Selector
const todoInput = document.querySelector('.todo-input');
const todobtn = document.querySelector('.todo-btn');
const todolist = document.querySelector('.todo-list');

//Event Listeners
todobtn.addEventListener('click',addTodo);
todolist.addEventListener('click',deleteAdd);

//Functions
function addTodo(e){
    console.log('yeah this is working');

    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo =document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value="";

    //Create Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML='<i class="fas fa-check"></i>';
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    //Create Trash Button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);

    todolist.appendChild(todoDiv);


}

function deleteAdd(e){
   const item = e.target;
   
   if(item.classList[0]=== "trash-btn"){
       const todo = item.parentElement;
       todo.classList.add('fall');
       todo.addEventListener('transitionend',e=>{
           todo.remove();
       });
   }
   if(item.classList[0]==='complete-btn'){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
   }
}