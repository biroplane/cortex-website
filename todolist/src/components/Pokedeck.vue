<template>
<ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {{pokReactive}}
{{pokemons}}
  <li v-for="pokemon in pokemons" :key="pokemon.id" class="rounded-lg bg-gradient-to-tr from bg-yellow-400 to-fuchsia-500 p-4">
    <div class="w-full aspect-square bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg">
      <img :src="pokemon.sprites.other.dream_world.front_default" alt="Pokemon" class="w-full h-full object-contain object-center rounded-lg" />
    </div>
    <h2 class="my-4 text-2xl font-bold">{{pokemon.name}}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam tempore impedit incidunt! Repellendus voluptatum veniam cum at cupiditate inventore ratione magni temporibus culpa. Quae similique voluptate quam iusto excepturi.</p>
  </li>
</ul>
</template>
<script setup>
import axios from "axios";
import { reactive, ref } from "vue";

let pokemons = ref([])
let pokReactive = reactive([])
// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(response=>response.json())
//   .then(data=>{
//     // console.log("Pokemon Loaded",data)
//     // pokemons.value = data.results
//     data.results.forEach(pokemon=>{

//       fetch(pokemon.url)
//         .then(response=>response.json())
//         .then(pokedata=>{
//           console.log("Pokedata",pokedata)
//           pokemons.value.push(pokedata)

//         }
//       )
//     })
//   })



const _pok= await axios.get('https://pokeapi.co/api/v2/pokemon')

_pok.data.results.map(async (pokemon)=>{
  console.log("Pokemon ",pokemon)
  let pokedata = await axios.get(pokemon.url)
  console.log("Pokedata",pokedata.data)
  pokemons.value.push(pokedata.data)
  pokReactive.push(pokReactive.data)
})
console.log("Pok",pokemons.value)

</script>

<style></style>