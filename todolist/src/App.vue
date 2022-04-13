<script setup>
import { computed, ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Pokedeck from "./components/Pokedeck.vue";
let todoList = ref([
  {text:"Read a book", completed:false},
  {text:"Buy groceries", completed:false},
  {text:"Call the doctor", completed:false},
  {text:"Learn JS", completed:false},
  {text:"Update my CV", completed:false},
])
let newTask = ref('hello')
const addTask=()=>{
  console.log("Adding task...")
  todoList.value.push({text:newTask.value,completed:false})
  newTask.value=''
}
const updateStatus = (index)=>{
  console.log("Updating ",index)
  todoList.value[index].completed=true
}
const deleteTask = (index)=>{
  console.log("Deleting ",index)
  todoList.value.splice(index,1)
}
const updateTask = (event,index)=>{
  console.log("Updating ",event.target.innerText,index)
  todoList.value[index].text=event.target.innerText
}

const update = (e)=>{
  console.log("Updating",e)
  newTask.value = e
}

let searchText = ref('')
const filteredTodo = computed(()=>{
  return todoList.value.filter(todo=>todo.text.toLowerCase().includes(searchText.value.toLowerCase()))
})
</script>

<template>
<app-header></app-header>
<main class="container py-6">
  <!-- <div class="flex gap-12">
    <my-input-text v-model="newTask" @input="update" @addtask="addTask"></my-input-text>
    <div class="flex">
      <input v-model="newTask"  type="text" placeholder="Add todo" class="border-2 border-r-0 border-blue-300 rounded-lg rounded-r-none py-3 px-2 focus:outline-none w-full">
      <button class="border-2 border-l-0 border-blue-300 bg-blue-500 rounded-lg rounded-l-none py-3 px-4" @click="addTask">Add</button>
    </div>
    <div>
      <input v-model="searchText"  type="text" placeholder="filter" class="border-2  border-blue-300 rounded-lg  py-3 px-2 focus:outline-none w-full">

    </div>
  </div>


  <ul class="mt-12">
    <li class="flex py-3 px-4 bg-gray-100 rounded-lg mb-2" v-for="(todo, t) in filteredTodo" :key="t">
      <span contenteditable="true" @input="updateTask($event,t)" class="flex-grow" :class="{'line-through':todo.completed}">{{todo.text}}</span>
      <div class="flex gap-4">
        <button @click="updateStatus(t)">⚡️</button>
        <button>🖋</button>
        <button @click="deleteTask(t)">🗑</button>
      </div>
    </li>
  </ul> -->
  <pokedeck></pokedeck>
</main>
</template>

<style>

</style>
