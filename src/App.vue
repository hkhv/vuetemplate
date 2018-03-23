<template>
  <div id="app">
    <top-nav :head-active="tabActive"></top-nav>
    <router-view/>
  </div>
</template>

<script>
import topNav from './components/common/topNav.vue'
export default {
  name: 'App',
  components: { topNav },
  data: function () {
    return {
      'tabActive': ''
    }
  },
  created: function () {
    this.tabActive = this.$route.path
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  padding: 15px;
}
</style>
