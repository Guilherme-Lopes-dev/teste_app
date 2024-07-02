import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/login/Index.vue';
import Home from '../views/home/Index.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',  // Certifique-se de que o nome da rota é 'home'
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
});

export default router;
