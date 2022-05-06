<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <task-list #default="slotProps">
      <h2>{{ slotProps.task }}</h2>
      <p>{{ slotProps['another'] }}</p>
    </task-list> -->
    <button @click="setSelectedComponent('active-tasks')">Active Tasks</button>
    <button @click="setSelectedComponent('manage-tasks')">Manage Tasks</button>
    <!-- <active-tasks v-if="selectedComponent === 'active-tasks'"></active-tasks>
    <manage-tasks v-if="selectedComponent === 'manage-tasks'"></manage-tasks> -->
    <keep-alive> <component :is="selectedComponent"></component></keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

// import TaskList from './components/TaskList.vue';
import ActiveTasks from './components/ActiveTasks.vue';
import ManageTasks from './components/ManageTasks.vue';

export default {
  components: {
    TheHeader,
    ActiveTasks,
    ManageTasks,
  },
  data() {
    return {
      selectedComponent: 'active-tasks',
      activeUser: {
        name: 'superuser',
        description: 'Site owner and admin',
        role: 'admin',
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
