import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chords',
    name: 'Chords',
    component: () =>
      import(/* webpackChunkName: "chords" */ '../views/Chords.vue'),
  },
  {
    path: '/scales',
    name: 'Scales',
    component: () =>
      import(/* webpackChunkName: "chords" */ '../views/Scales.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
