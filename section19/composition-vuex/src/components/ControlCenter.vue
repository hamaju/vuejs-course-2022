<template>
  <button @click="increment">Increment</button>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const increment = () => {
      store.dispatch('increment');
    };

    return { increment };
  },
};
</script>
