const app = Vue.createApp({
  data() {
    return {
      name: 'apu apustaja',
      age: 12,
      imageLink:
        'https://i.kym-cdn.com/entries/icons/original/000/021/523/R14kkDj.png',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random().toFixed(1);
    },
  },
});

app.mount('#assignment');
