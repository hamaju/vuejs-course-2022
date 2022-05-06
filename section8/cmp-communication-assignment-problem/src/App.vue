<template>
  <div>
    <header><h1>Assignment 6</h1></header>
    <user-data @set-data="setUserData"></user-data>
    <active-user :name="user.name" :age="user.age"></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Ada',
        age: 32,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name,
        // convert the string to a number
        age: +age,
      };
    },
  },
};
</script>

<style>
section {
  margin: 2rem auto;
  max-width: 50rem;
}
</style>
