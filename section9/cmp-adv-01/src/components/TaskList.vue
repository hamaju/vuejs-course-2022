<template>
  <ul>
    <li v-for="task in tasks" :key="task">
      <slot :task="task" another="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['do something', 'eat the baby'],
    };
  },
};
</script>
