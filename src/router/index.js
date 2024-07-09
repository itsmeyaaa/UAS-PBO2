import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FashionView from '../views/FashionView.vue'
import FashionDetail from '../views/FashionDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fashion',
    name: 'FashionView',
    component: FashionView
  },
  
    {
      path: '/fashion/:id',
      name: 'FashionDetail',
      component: FashionDetail
    },
    
    {
      path: '/keranjang',
      name: 'Keranjang',
      component: Keranjang
    },

    {
      path: '/pesanan-sukses',
      name: 'PesananSukses',
      component: PesananSukses,
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
