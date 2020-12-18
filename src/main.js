import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 注册axios到vue实力上
import axios from "./api/http"
Vue.config.productionTip = false
// 将axios注册到vue实例上（原型上）
Vue.prototype.$http=axios;
Vue.config.productionTip=false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
