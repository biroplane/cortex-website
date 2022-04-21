<template>
  <ul class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    <!--  -->
    <poke-card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></poke-card>
  </ul>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import PokeCard from "./PokeCard.vue";

let pokemons = ref([]);

onMounted(async () => {
  const _pok = await axios.get("https://pokeapi.co/api/v2/pokemon");
  _pok.data.results.forEach(async (pokemon) => {
    let pokedata = await axios.get(pokemon.url);
    pokemons.value.push(pokedata.data);
  });
});
</script>

<style></style>
