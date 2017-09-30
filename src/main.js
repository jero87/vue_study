import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './router'

Vue.use(VueRouter)

const myRoutes = new VueRouter({routes})


new Vue({
  el: '#app',
  router:myRoutes,
  render: h => h(App)
})
