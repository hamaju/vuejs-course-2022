<template>
  <h2>Manage Tasks</h2>
  <input type="text" ref="task" />
  <button @click="setTask">Set Task</button>
  <teleport to="body">
    <error-modal v-if="inputIsInvalid">
      <h2>Invalid input</h2>
      <p>Please enter at least one character</p>
      <button @click="closeModal">Close</button>
    </error-modal>
  </teleport>
</template>

<script>
import ErrorModal from './ErrorModal.vue';

export default {
  components: {
    ErrorModal,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setTask() {
      const enteredValue = this.$refs.task.value;
      if (enteredValue === '') {
        this.inputIsInvalid = true;
      }
    },
    closeModal() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
