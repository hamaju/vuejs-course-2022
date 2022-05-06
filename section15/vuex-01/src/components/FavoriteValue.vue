<template>
  <h3>{{ counter }}</h3>
  <p>Do something here</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters['counter/normalizedCounter'];
    },
  },
};
</script>
