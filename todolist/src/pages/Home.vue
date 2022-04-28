<template>
  <div class="container mt-12">
    Hello From Vue

    <pre>{{ holidays }}</pre>
  </div>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const holidays = ref([]);
onMounted(async () => {
  const _holidays = await axios.get(
    "https://date.nager.at/api/v3/PublicHolidays/2022/IT"
  );
  holidays.value = _holidays.data;
});
</script>
