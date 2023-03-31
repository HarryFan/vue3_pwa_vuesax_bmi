import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // 套用 Vuesax 的樣式
import './registerServiceWorker'

const app = createApp(App)
app.use(router)
app.use(Vuesax)
app.mount('#app')
