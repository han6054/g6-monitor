import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/base.scss';
import axios from './app/axios';
import App from './app/app.vue';
import router from './app/router';

const app = createApp(App);

app.config.globalProperties.$api = axios;

app.use(router)
    .use(ElementPlus)
    .mount('#app');