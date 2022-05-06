const app = Vue.createApp({
  data() {
    return {
      tasks: ['do something', 'do nothing'],
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputTask() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.tasks[0];
      } else {
        return this.tasks[1];
      }
    },
  },
});

app.mount('#user-task');
