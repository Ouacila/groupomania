import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$http = axios
Vue.use(axios, VueAxios)

window.token = localStorage.getItem('token');

window.axios = axios
window.axios.defaults.baseURL = 'http://localhost:7070'
window.axios.defaults.params = {
  api_token: window.token
}

Vue.config.productionTip = false
window.Event = new Vue;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')