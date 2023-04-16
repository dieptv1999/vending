import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Home },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  // {
  //   path: '*',
  //   component: NotFound
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router