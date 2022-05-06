<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <input type="text" placeholder="Your name" v-model="enteredName" />
      </div>
      <div>
        <input type="number" placeholder="Your age" v-model="enteredAge" />
      </div>
      <button>Set user data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.enteredName, this.enteredAge);
    },
  },
};
</script>
