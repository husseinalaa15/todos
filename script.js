const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const todosData = JSON.parse(localStorage.getItem('todos'));


if(todosData){
    todosData.forEach(todo => {
        addTodo(todo)
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    addTodo();
    updateLS()
})

function addTodo(todo){
    let todoText =input.value;

    if (todo){
        todoText = todo.text;
    }

    if(todoText){
          const todoEl = document.createElement('li');
          todoEl.innerText=todoText;
        if(todo && todo.completed){
          todoEl.classList.add('completed')
            }
            // completed
          todoEl.addEventListener("click",()=>{
              todoEl.classList.toggle('completed')

              updateLS()
          })

        //   delete
        todoEl.addEventListener('contextmenu', (e)=>{
            e.preventDefault();

            todoEl.remove();
            updateLS()
        })
        
        
          todos.appendChild(todoEl);

          input.value = ""
    }
}


function updateLS(){
    const todosLIs= document.querySelectorAll("li");
    const todoList = [];
    todosLIs.forEach((todoli) =>{
        todoList.push({
            text:todoli.innerText,
            completed:todoli.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos",JSON.stringify(todoList));
}