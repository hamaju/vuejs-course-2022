<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script setup>
import { defineProps, computed, inject, onBeforeMount, onMounted } from 'vue';

const props = defineProps(['firstName', 'lastName']);

const age = inject('userAge');

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMount');
});

const userName = computed(() => {
  return `${props.firstName} ${props.lastName}`;
});
</script>
