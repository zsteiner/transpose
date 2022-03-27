import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Chords from '../views/Chords.vue';
import Scales from '../views/Scales.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chords',
    name: 'Chords',
    component: Chords,
  },
  {
    path: '/scales',
    name: 'Scales',
    component: Scales,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
