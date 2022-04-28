<template>
  <main class="container py-6">
    <div class="flex gap-12">
      <my-input-text v-model="newTask" @input="update" @addtask="addTask" />
      <div class="flex">
        <input
          v-model="newTask"
          type="text"
          placeholder="Add todo"
          class="border-2 border-r-0 border-blue-300 rounded-lg rounded-r-none py-3 px-2 focus:outline-none w-full"
        />
        <button
          class="border-2 border-l-0 border-blue-300 bg-blue-500 rounded-lg rounded-l-none py-3 px-4"
          @click="addTask"
        >
          Add
        </button>
      </div>
      <div>
        <input
          v-model="searchText"
          type="text"
          placeholder="filter"
          class="border-2 border-blue-300 rounded-lg py-3 px-2 focus:outline-none w-full"
        />
      </div>
    </div>

    <ul class="mt-12">
      <list-item
        v-for="(todo, t) in filteredTodo"
        :key="t"
        :todo="todo"
        @update="updateStatus"
        @delete="deleteTask"
        @update-task="updateTask"
      ></list-item>
      <!-- <li
        v-for="(todo, t) in filteredTodo"
        :key="t"
        class="flex py-3 px-4 bg-gray-100 rounded-lg mb-2"
      >
        <span
          contenteditable="true"
          class="flex-grow"
          :class="{ 'line-through': todo.completed }"
          @input="updateTask($event, t)"
          >{{ todo.text }}</span
        >
        <div class="flex gap-4">
          <button @click="updateStatus(t)">⚡️</button>
          <button>🖋</button>
          <button @click="deleteTask(t)">🗑</button>
        </div>
      </li> -->
    </ul>
  </main>
</template>

<script setup>
import ListItem from "@/components/ListItem.vue";
import { computed, ref } from "vue";
import MyInputText from "../components/MyInputText.vue";

/**
 * 1. Read localStorage
 * 2. Set todoList to localStorage
 * 3. Add todoList to localStorage
 */

const _todoListStorage = localStorage.todoList || [];
console.log("LocalStorage ", _todoListStorage);
let todoList = ref(JSON.parse(_todoListStorage));

const updateLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
};

let newTask = ref("hello");
const addTask = () => {
  console.log("Adding task...");
  todoList.value.push({ text: newTask.value, completed: false });
  newTask.value = "";
  updateLocalStorage();
};
const updateStatus = (index) => {
  const _index = todoList.value.findIndex((todo) => todo.text === index.text);
  console.log("Updating ", _index);
  todoList.value[_index].completed = !todoList.value[_index].completed;
  updateLocalStorage();
};
const deleteTask = (index) => {
  const _index = todoList.value.findIndex((todo) => todo.text === index.text);

  console.log("Deleting ", _index);
  todoList.value.splice(_index, 1);
  updateLocalStorage();
};
const updateTask = (event, index) => {
  const _index = todoList.value.findIndex((todo) => todo.text === index.text);
  console.log("Updating tansk value ", event.target.innerText, _index);

  todoList.value[_index].text = event.target.innerText;
  var endTyping = false;
  const to = setTimeout(() => {
    updateLocalStorage();
    endTyping = true;
    clearInterval(to);
    console.log("EndType", endTyping);
    return;
  }, 1000);
};

const update = (e) => {
  console.log("Updating", e);
  newTask.value = e;
};

let searchText = ref("");
const filteredTodo = computed(() => {
  return todoList.value.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.value.toLowerCase())
  );
});
</script>

<style></style>
