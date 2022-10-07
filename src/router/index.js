import { createRouter, createWebHistory } from 'vue-router';
import Profile from '../views/ProfileView.vue';
import Home from '../views/HomeView.vue';
import Works from '../views/WorkView.vue';
import Timer from '../components/TimerDemo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/timerDemo',
    name: 'Timer',
    component: Timer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
