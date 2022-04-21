<script setup>
const navigation = [
  { label: "Home", path: "/" },
  { label: "Pokemons", path: "/pokemons" },
  { label: "About", path: "/about" },
  { label: "Todo List", path: "/todolist" },
];
</script>
<template>
  <header
    class="flex items-center justify-around h-32 bg-blue-300 text-gray-800"
  >
    <h1 id="mainTitle">
      <a href="#" class="font-bold text-7xl">Cortex</a>
    </h1>
    <ul class="flex gap-8 list-none">
      <li class="hover:bg-red-500" v-for="(nav, n) in navigation" :key="n">
        <router-link :to="nav.path" active-class="p-4 bg-yellow-400">{{
          nav.label
        }}</router-link>
      </li>
    </ul>
  </header>
</template>
