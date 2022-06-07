import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/common.scss'
import UI from '@/components/library'
import htmlToPdf from '@/utils/htmlToPdf.js'

createApp(App).use(store).use(router).use(UI).use(htmlToPdf).mount('#app')
