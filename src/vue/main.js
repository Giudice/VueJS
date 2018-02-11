import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './routes.js'
import app from './app.vue'
import {store} from './store.js'

Vue.use(VueRouter)
Vue.use(Vuex)


new Vue({
  el: '#app',
  store: store,
  router,
  render: h => h(app)
})
