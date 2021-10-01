<template>
  <n-layout>
    <n-layout-header bordered>
      <nav-bar>
      </nav-bar>
    </n-layout-header>
    <n-layout-content embedded content-style="padding: 24px;">
        <router-view/>
    </n-layout-content>
    <n-layout-footer embedded>成府路</n-layout-footer>
  </n-layout>
</template>
<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
