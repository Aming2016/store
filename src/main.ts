import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerStore } from '@/stores';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router)

// 注册pinia状态管理库
registerStore();

app.mount('#app')
