<template>
  <section>
    <h2>
      <strong>Name: {{ name }}</strong>
    </h2>
    <h3>
      <strong>Age: {{ age }}</strong>
    </h3>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
