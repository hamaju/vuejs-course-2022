<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="courseData.goalVisibility">{{ courseData.goal }}</h3> -->
  <h3 v-if="goalVisibility">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<!-- <script setup>
// import { reactive } from 'vue';

// separate refs
// const courseGoal = ref('haha');
// const goalIsVisible = ref(false);

// ref object
// const courseData = ref({
//   goal: 'lol',
//   goalVisibility: false,
// });

// reactive object
// const courseData = reactive({
//   goal: 'lol',
//   goalVisibility: false,
// });

const toggleGoalVisibility = () => {
  // goalIsVisible.value = !goalIsVisible.value;
  // courseData.value.goalVisibility = !courseData.value.goalVisibility;
  // courseData.goalVisibility = !courseData.goalVisibility;
};
</script> -->

<script>
export default {
  data() {
    return {
      courseGoal: 'w',
      goalVisibility: false,
    };
  },
  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
