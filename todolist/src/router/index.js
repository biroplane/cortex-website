import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/Home.vue") },
  { path: "/about", component: () => import("@/pages/About.vue") },
  { path: "/pokemons", component: () => import("@/pages/Pokemons.vue") },
  {
    path: "/pokemons/:id",
    component: () => import("@/pages/PokemonDetails.vue"),
  },
  { path: "/todolist", component: () => import("@/pages/Todolist.vue") },
];

export const router = new createRouter({
  history: createWebHistory(),
  routes,
});
