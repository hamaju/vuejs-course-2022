import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import FriendForm from './components/FriendForm';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('friend-form', FriendForm);

app.mount('#app');
