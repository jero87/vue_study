import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import _ajax from "@/api"

const myRoutes = new VueRouter({routes})
Vue.use(VueRouter)
Vue.prototype._ajax = _ajax

new Vue({
  el: '#app',
  router:myRoutes,
  render: h => h(App)
})
