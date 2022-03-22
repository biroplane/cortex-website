let addTaskBtn = document.querySelector('.add-task-btn');
let taskInput = document.querySelector('.task-input');
let todoListRaw = document.querySelector('.todo-list-raw');
let todoTask = document.querySelector('.todo-tasks');
console.log("todoTask", todoTask)
let todoList = []
addTaskBtn.addEventListener('click',function(){
  console.log("Add task to list", taskInput.value)
  todoList.push({text:taskInput.value, status:'todo'})
  updateList()
  taskInput.value=''
})

function updateList(){
  todoTask.innerHTML = ''
  for(let i = 0; i < todoList.length; i++){
    let li = document.createElement('li')
    let editBtn = document.createElement('button')
    let deleteBtn = document.createElement('button')
    let spanEl = document.createElement('span')

    editBtn.innerHTML = 'Edit'
    editBtn.addEventListener('click',function(){
      console.log("Edit this item", todoList[i])
    })
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.addEventListener('click',function(){
      console.log("Delete this item", todoList[i])
      todoList.splice(i,1)
      updateList()
    })
    spanEl.innerHTML = todoList[i].text + ": " + todoList[i].status
    spanEl.classList.add('flex-grow')
    li.appendChild(spanEl)
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
