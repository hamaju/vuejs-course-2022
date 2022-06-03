<template>
  <li>
    <h2>{{ friend.name }} {{ friend.isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
    <button @click="deleteContact">Delete</button>
  </li>
</template>

<script>
export default {
  props: ['friend'],
  // props: {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   phoneNumber: {
  //     type: String,
  //     required: true,
  //   },
  //   emailAddress: {
  //     type: String,
  //     required: true,
  //   },
  //   isFavorite: {
  //     type: Boolean,
  //     required: false,
  //     default: false,
      // validator: (value) => {
      //   return value === '1' || value === '0';
      // },
  //   },
  // },
  emits: ['toggle-favorite', 'delete-contact'],
  // emits: {
  //   'toggle-favorite': (id) => {
  //     if (!id) {
  //       console.error('id is missing!');
  //       return false;
  //     }
  //     return true;
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.friend.id);
    },
    deleteContact() {
      this.$emit('delete-contact', this.friend.id);
    },
  },
};
</script>
