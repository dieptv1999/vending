import Home from './pages/Home.vue'
import DetailPage from './pages/DetailPage.vue'
import App from './App.vue'
import './index.scss';
import {createApp} from "vue";
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/pages/NotFound.vue";
import { MotionPlugin } from '@vueuse/motion'
import VueIframe from 'vue-iframes'

const routes = [
  { path: '/home', component: Home },
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
app.use(VueIframe)
app.mount('#app')