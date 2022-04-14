<template>
  <!-- HTML GOES HERE -->
  <div class="flex">
    <input
      v-model="newValue"
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
</template>
<script setup>
import { computed } from "vue";

// JAVASCRIPT GOES HERE
/**
var props = {
  modelValue
}
props.modelValue
*/

const props = defineProps({
  modelValue: {
    type: String,
    default: "my input text model",
  },
});
const emits = defineEmits(["input", "addtask"]);
const newValue = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emits("input", v);
  },
});
let addTask = () => {
  console.log("Emitting...");
  // emits("input", newValue);
  emits("addtask", newValue);
};
</script>

<style>
/** CSS GOES HERE */
</style>
