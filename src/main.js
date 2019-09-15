import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// Bootstrap
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

// Main SCSS
import '@/assets/scss/main.scss'

// Axios (for http requests)
const axiosConfig = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT
})
Vue.prototype.$http = axiosConfig

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
