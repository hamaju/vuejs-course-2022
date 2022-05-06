<template>
  <div class="container">
    <h2>Users</h2>
    <div class="container">
      <users-list></users-list>
    </div>
    <router-link to="/tasks">Tasks</router-link>
  </div>
</template>

<script>
import UsersList from '../components/UsersList.vue';

export default {
  components: { UsersList },
};
</script>
