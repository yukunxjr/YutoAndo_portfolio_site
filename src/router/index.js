import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../components/Profile.vue';
import Home from '../components/Home.vue';
import Works from '../components/Works.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
