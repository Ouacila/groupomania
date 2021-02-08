import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import axios from 'axios'

window.token = localStorage.getItem('token');

window.axios = axios
window.axios.defaults.baseURL = 'http://localhost:7070'
window.axios.defaults.params = {
  api_token: window.token
}

Vue.use(Vuetify)
Vue.config.productionTip = false
window.Event = new Vue;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')