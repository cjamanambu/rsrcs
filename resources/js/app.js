require('./bootstrap')
import Vue from 'vue/dist/vue.js'
window.Vue = require('vue')

import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VTooltip from 'v-tooltip'
import VueSweetalert2 from 'vue-sweetalert2'

import 'sweetalert2/dist/sweetalert2.min.css'

import { routes } from './routes'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageHeader from './components/PageHeader.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VTooltip)
Vue.use(VueSweetalert2)

Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('PageHeader', PageHeader)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0}
  },
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  return next()
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})