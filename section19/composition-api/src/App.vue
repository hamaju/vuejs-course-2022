<template>
  <section class="container">
    <UserData :first-name="firstName" :last-name="lastName" />
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue';

import UserData from './components/UserData.vue';

// reactive only works with objects
// const user = reactive({
//   name: 'luser',
//   age: 29,
// });

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref('');
const age = ref(29);
const userName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});

watch([userName, age], (newValues, oldValues) => {
  console.log('Old name:', oldValues[0]);
  console.log('New name:', newValues[0]);
  console.log('Old age:', oldValues[1]);
  console.log('New age:', newValues[1]);
});

provide('userAge', age);

const setNewAge = () => {
  age.value = 30;
};

const setLastName = () => {
  lastName.value = lastNameInput.value.value;
};

// const setFirstName = (event) => {
//   firstName.value = event.target.value;
// };

// const setLastName = (event) => {
//   lastName.value = event.target.value;
// };

// setTimeout(() => {
//   user.name = 'superuser';
//   user.age++;
// }, 2000);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
