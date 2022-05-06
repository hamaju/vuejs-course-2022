const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedUserInput: '',
    };
  },
  methods: {
    setInputField(event) {
      this.userInput = event.target.value;
    },
    setConfirmedInputField(event) {
      this.confirmedUserInput = event.target.value;
    },
    showAlert() {
      alert('ping');
    },
  },
});

app.mount('#assignment');
