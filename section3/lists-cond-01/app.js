const app = Vue.createApp({
  data() {
    return {
      goals: [],
      newGoal: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoal);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount('#user-goals');
