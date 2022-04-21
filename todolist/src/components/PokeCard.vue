<script setup>
defineProps({
  pokemon: {
    type: Object,
    default: () => ({}),
  },
  isLongVersion: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <router-link :to="`/pokemons/${pokemon.name}`">
    <li class="rounded-lg bg-gradient-to-tr from-yellow-400 to-fuchsia-500 p-4">
      <div
        class="w-full aspect-square bg-gradient-to-b from-blue-400 to-purple-500 rounded-lg"
      >
        <img
          :src="pokemon?.sprites?.other?.dream_world?.front_default"
          alt="Pokemon"
          class="w-full h-full object-contain object-center rounded-lg"
        />
      </div>
      <h2 class="my-4 text-2xl font-bold text-white drop-shadow-sm">
        {{ pokemon.name }}
      </h2>
      <p v-if="isLongVersion">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos veniam
        tempore impedit incidunt! Repellendus voluptatum veniam cum at
        cupiditate inventore ratione magni temporibus culpa. Quae similique
        voluptate quam iusto excepturi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eos veniam tempore impedit incidunt! Repellendus
        voluptatum veniam cum at cupiditate inventore ratione magni temporibus
        culpa. Quae similique voluptate quam iusto excepturi. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Eos veniam tempore impedit
        incidunt! Repellendus voluptatum veniam cum at cupiditate inventore
        ratione magni temporibus culpa. Quae similique voluptate quam iusto
        excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
        veniam tempore impedit incidunt! Repellendus voluptatum veniam cum at
        cupiditate inventore ratione magni temporibus culpa. Quae similique
        voluptate quam iusto excepturi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Eos veniam tempore impedit incidunt! Repellendus
        voluptatum veniam cum at cupiditate inventore ratione magni temporibus
        culpa. Quae similique voluptate quam iusto excepturi.
      </p>
    </li>
  </router-link>
</template>
