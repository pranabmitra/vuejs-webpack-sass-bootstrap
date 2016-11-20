<template>
  <div class="hello">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    <div class="container">
      <p>This is bootstrap container</p>
      <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6">
          <h2>Essential Links</h2>
          <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          </ul>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6">
          <h2>Ecosystem</h2>
          <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
