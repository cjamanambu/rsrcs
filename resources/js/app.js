// Vue App
require('./bootstrap')
import Vue from 'vue/dist/vue.js'
window.Vue = require('vue')
import App from './App.vue'

import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import VueClipboard from 'vue-clipboard2'
import VueToast from 'vue-toast-notification'
import VuePrism from 'vue-prism'

import 'sweetalert2/dist/sweetalert2.min.css'
import 'vue-toast-notification/dist/theme-default.css';
import 'prismjs/themes/prism.css'

import api from './api'

import { routes } from './routes'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageHeader from './components/PageHeader.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.prototype.$api = api
Vue.use(VueSweetalert2)
Vue.use(VueClipboard)
Vue.use(VueToast)
Vue.use(VuePrism)

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