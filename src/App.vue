<script setup lang="ts">
import DynamicForm from '@/components/forms/DynamicForm.vue';
</script>

<template>
  <main>
    <DynamicForm />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
