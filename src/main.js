import Vue from 'vue'
import App from './App'

require('./../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('./sass/style.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
