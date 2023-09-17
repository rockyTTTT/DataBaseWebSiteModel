import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Browse from '@/components/Browse.vue'
import Search from '@/components/Search.vue'
import Blast from '@/components/Blast.vue'
import Download from '@/components/Download.vue'
import Help from '@/components/Help.vue'
import Citation from '@/components/Citation.vue'
import Contact from '@/components/Contact.vue'

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
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/blast",
    name: "blast",
    component: Blast,
  },
  {
    path: "/download",
    name: "download",
    component: Download,
  },
  {
    path: "/help",
    name: "help",
    component: Help,
  },
  {
    path: "/download",
    name: "download",
    component: Download,
  },
  {
    path: "/citation",
    name: "citation",
    component: Citation,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
