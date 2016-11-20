<template>
  <div id="app">
    <site-header></site-header>
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
// import Hello from './components/Hello'
import SiteHeader from './components/SiteHeader'

export default {
  name: 'app',
  components: {
    // Hello,
    SiteHeader
  }
}
</script>
