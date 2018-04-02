<template>
  <div id="app" class="bg-dark">
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
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100%;
}
.container {
  padding: 15px;
}
</style>
