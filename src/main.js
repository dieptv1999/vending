import Home from './pages/Home.vue'
import DetailPage from './pages/DetailPage'
import App from './App'
import './index.scss';
import {createApp} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/pages/NotFound";
import { MotionPlugin } from '@vueuse/motion'

const routes = [
  { path: '/', component: Home },
  { path: '/detail', component: DetailPage },
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

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')