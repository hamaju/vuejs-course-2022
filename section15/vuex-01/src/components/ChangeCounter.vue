<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 5 })">Add 5</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('counter', ['increment', 'increase']),
  },
};
</script>
