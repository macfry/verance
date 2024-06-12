<script setup lang="ts">
import { ref } from 'vue';
import InputText from '@/components/forms/InputText.vue';
import debounce from '@/helpers/debounce';

defineProps(['modelValue']);
const search = ref<string>();
const emit = defineEmits(['update:modelValue']);
const onInput = debounce((val: string) => {
  emit('update:modelValue', val);
}, 1000);
</script>

<template>
  <div class="input-group fs-6">
    <input-text name="search" placeholder="Search" v-model="search" @input="onInput($event.target.value)" />
  </div>
</template>

<style scoped>
.input-group {
  display: inline-flex;
  flex-wrap: nowrap;
  margin-bottom: 1rem;
}
</style>
