var Vue = require('vue')
var VueRouter = require('vue-router')

Vue.use(VueRouter)

// import Vue from 'vue'
import App from './App'

const EssentialLinks = require('./components/EssentialLinks')
const Ecosystem = require('./components/Ecosystem')

require('./../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./sass/main.scss')
require('./sass/style.scss')

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/links', component: EssentialLinks },
  { path: '/ecosystem', component: Ecosystem }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
// new Vue({
//   router
// }).$mount('#app')

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
