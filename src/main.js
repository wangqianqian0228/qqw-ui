import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qqwUi from './packages/index'
import Alert from './packages/alert/alert'
Vue.prototype.$Alert = Alert
Vue.config.productionTip = false
Vue.use(qqwUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
