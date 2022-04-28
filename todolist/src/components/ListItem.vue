<template>
  <li
    class="flex py-3 px-4 bg-gradient-to-l from-yellow-400 to-purple-500 rounded-lg mb-2"
  >
    <span
      contenteditable="true"
      class="flex-grow"
      :class="{ 'line-through': todo.completed }"
      @input="$emit('updateTask', $event, todo)"
      >{{ todo.text }}</span
    >
    <div class="flex gap-4">
      <button @click="$emit('update', todo)">⚡️</button>
      <button>🖋</button>
      <button @click="$emit('delete', todo)">🗑</button>
    </div>
  </li>
</template>
<script setup>
defineProps({
  todo: {
    type: Object,
    default: () => ({}),
  },
});
defineEmits(["update", "delete", "updateTask"]);
</script>
