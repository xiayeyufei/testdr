import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store  from './store';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

require('./assets/app.css')

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'
import 'bootstrap-vue/dist/bootstrap-vue-icons.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.js'
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  data() {
    return {
    };
  },
})

