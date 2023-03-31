import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; // 引入 Vuesax 樣式

Vue.use(Vuesax);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
