import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/main'
import './plugins/ant-design-vue.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')