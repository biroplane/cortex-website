import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import PokemonDetail from "../pages/PokemonDetails.vue";
import Pokemons from "../pages/Pokemons.vue";
import Todolist from "../pages/Todolist.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/pokemons", component: Pokemons },
  { path: "/pokemons/:id", component: PokemonDetail },
  { path: "/todolist", component: Todolist },
];

export const router = new createRouter({
  history: createWebHistory(),
  routes,
});
