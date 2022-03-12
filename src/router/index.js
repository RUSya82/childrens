import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FormVue from "../views/FormVue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: FormVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
