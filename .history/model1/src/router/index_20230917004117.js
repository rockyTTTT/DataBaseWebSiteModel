import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Browse from '@/components/Browse.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/browse",
    name: "browse",
    component: Browse,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
