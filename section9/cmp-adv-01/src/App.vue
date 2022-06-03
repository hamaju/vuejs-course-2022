<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-tasks')">Active Tasks</button>
    <button @click="setSelectedComponent('manage-tasks')">Manage Tasks</button>
    <keep-alive><component :is="selectedComponent"></component></keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ActiveTasks from "./components/ActiveTasks.vue";
import ManageTasks from "./components/ManageTasks.vue";

export default {
  components: {
    TheHeader,
    ActiveTasks,
    ManageTasks,
  },
  data() {
    return {
      selectedComponent: "active-tasks",
      activeUser: {
        name: "superuser",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
