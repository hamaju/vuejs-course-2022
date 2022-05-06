<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <coach-form @coachform-data="submitForm"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    submitForm(data) {
      this.$store.dispatch('coaches/addCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
