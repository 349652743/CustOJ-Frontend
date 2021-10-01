<template>
  <n-layout embedded style="height: 100%;">
    <n-layout-header bordered style="height: 64px;">
      <nav-bar>
      </nav-bar>
    </n-layout-header>
    <n-layout-content content-style="padding: 24px;">
        <router-view/>
    </n-layout-content>
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
html,body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  height: 100%;
  margin: 0;
  padding: 0;
}


.n-layout-content {
  background-color: transparent;
}


</style>
