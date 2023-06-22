import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    //component: HomeView
    component: () => import(/* webpackChunkName: "about" */ '../views/StartGameView.vue')
  },
  {
    path: '/startGame',
    name: 'startGame',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/StartGameView.vue')
  },
  {
    path: '/waittingParty',
    name: 'waittingParty',
    component: () => import('../views/WaittingPartyView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
