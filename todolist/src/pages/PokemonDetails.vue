<template>
  <div class="container">
    <h1 class="font-bold text-4xl capitalize my-4">{{ pokemon.name }}</h1>
    <poke-card :pokemon="pokemon" is-long-version></poke-card>
    <pokedeck class="mt-12" />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import PokeCard from "../components/PokeCard.vue";
import Pokedeck from "../components/Pokedeck.vue";

const pokemon = ref({});

onMounted(async () => {
  const route = useRoute();
  const _pokemon = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
  );
  console.log("_pokemon", _pokemon);
  pokemon.value = _pokemon.data;
});
</script>

<style></style>
