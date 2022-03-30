let addTaskBtn = document.querySelector('.add-task-btn');
let taskInput = document.querySelector('.task-input');
let todoListRaw = document.querySelector('.todo-list-raw');
let todoTask = document.querySelector('.todo-tasks');

// FILTER
let filterTaskBtn = document.querySelector('.filter-task-btn')
let filterTaskInput = document.querySelector('.filter-task-input')

filterTaskBtn.addEventListener('click',()=>{
  let filterText = filterTaskInput.value
  // let filteredArray = todoList.filter(function(todo){
  //   console.log("Todo Item",todo)
  // })

  let filteredArray = todoList.filter(todo=>todo.text.toLowerCase().includes(filterText.toLowerCase()))   
  console.log("Results", filteredArray)
  todoList = filteredArray
  updateList()
})


let todoList = [
  {text:"Read a book", status:'todo'},
  {text:"Buy groceries", status:'todo'},
  {text:"Call the doctor", status:'todo'},
  {text:"Learn JS", status:'todo'},
  {text:"Update my CV", status:'todo'},
]
addTaskBtn.addEventListener('click',function(){
  console.log("Add task to list", taskInput.value)
  todoList.push({text:taskInput.value, status:'todo'})
  updateList()
  taskInput.value=''
})



let selectedTask

function updateList(){
  todoTask.innerHTML = ''
  for(let i = 0; i < todoList.length; i++){
    let todo = todoList[i]
    let li = document.createElement('li')
    let editBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    let completedBtn = document.createElement('button')
    let spanEl = document.createElement('span')

    editBtn.innerHTML = 'Edit'
    editBtn.addEventListener('click',function(){
      console.log("Edit this item", todo)
      selectedTask = todo
      taskEditInput.value = todo.text
      // editTask(todoList[i])
    })
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.addEventListener('click',function(){
      console.log("Delete this item", todoList[i])
      todoList.splice(i,1)
      updateList()
    })

    completedBtn.innerHTML="⚡️"
    completedBtn.addEventListener('click',function(){
      console.log("Task completed",todoList[i])
      todoList[i].status = "completed"
      updateList()
    })
    completedBtn.classList.add('px-3','py-1','borderd-2','border-orange-500','rounded-md','bg-orange-100','hover:bg-orange-300')

    spanEl.addEventListener('input',(evt)=>todoList[i].text = evt.target.innerHTML)
    spanEl.addEventListener('blur',()=>{
      console.log("You can update the list")
      updateList()
    })
    spanEl.innerHTML = todoList[i].text 
    spanEl.contentEditable = true
    spanEl.classList.add('flex-grow')
    spanEl.classList.add(todoList[i].status=='completed' ? 'line-through': null)
    li.appendChild(spanEl)
    li.appendChild(completedBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
    li.classList.add('flex','gap-3','w-full','h-12','bg-gray-200','border-b-2','border-gray-100','p-2','items-baseline')
    todoTask.appendChild(li)
  }
  // todoList.forEach(function(item){
  //   let li = document.createElement('li')
  //   li.innerHTML = item
  //   todoTask.appendChild(li)
  // })
}



function editTask(task){
  let newText = taskEditInput.value
  selectedTask.text=newText
  // task.text = newText
  updateList()
}

updateList()

// todoListRaw.innerHTML="HELLO"














// let mainTitle = document.getElementById('mainTitle')
// let changeTextButton = document.querySelector('button.change-title')
// changeTextButton.addEventListener('click',function(){
//   changeTextButton.textContent = 'Clicked!'
//   mainTitle.innerHTML = 'Hello World'
//   mainTitle.classList.add('text-7xl','text-red-600','font-bold','mb-4','text-center','custom-class')
// })
// console.log("Button", changeTextButton)

// console.log("Main title " , mainTitle)
