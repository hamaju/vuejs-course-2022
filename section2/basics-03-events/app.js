const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      input: '',
      confirmedInput: '',
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setInputField(event, hardcodedText) {
      this.input = `${event.target.value} ${hardcodedText}`;
    },
    confirmInput() {
      this.confirmedInput = this.input;
    },
    submitForm(event) {
      // event.preventDefault();
      alert('Submitted!');
    },
  },
});

app.mount('#events');
