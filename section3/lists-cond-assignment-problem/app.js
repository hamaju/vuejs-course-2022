const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: '',
      taskListVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListVisible ? 'Hide' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
    },
    toggleTaskListVisibility() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
});

app.mount('#assignment');
