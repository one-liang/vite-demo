import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Guide from '../components/Guide.vue';
import Drop from '../components/Drop.vue';
import FBLogin from '../components/FBLogin.vue';
import InfiniteScroll from '../components/InfiniteScroll.vue';
import AxiosDemo from '../components/AxiosDemo.vue';

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
    {
      path: '/fblogin',
      component: FBLogin,
    },
    {
      path: '/infinitescroll',
      component: InfiniteScroll,
    },
    {
      path: '/axiosdemo',
      component: AxiosDemo,
    },
  ]
})

export default router