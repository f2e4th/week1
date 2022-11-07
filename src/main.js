import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gsap } from 'gsap';

const app = createApp(App);

app.use(gsap)
   .mount('#app');
