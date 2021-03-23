import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Guide from '../components/Guide.vue';
import Drop from '../components/Drop.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/guide',
      component: Guide,
    },
    {
      path: '/drop',
      component: Drop,
    },
  ]
})

export default router