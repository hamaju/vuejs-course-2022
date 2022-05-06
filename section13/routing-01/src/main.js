import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs authentication');
    // next();
  } else {
    next();
  }
  // navigation guard
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { id: 't2' } });
  // }
  next();
});

router.afterEach((to, from) => {
  console.log('global afterEach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
