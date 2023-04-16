import App from './App.vue'
import './index.scss';
import {createApp} from "vue";
import { MotionPlugin } from '@vueuse/motion'
import VueIframe from 'vue-iframes'
import router from "@/router";



const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.use(VueIframe)
app.mount('#app')