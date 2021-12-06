import Vue from 'vue'
import App from './App.vue'
import router from './router'
import qqwUi from './packages/index'
Vue.config.productionTip = false
Vue.use(qqwUi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
