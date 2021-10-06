<template>
  <n-message-provider>
    <n-layout embedded style="height: 100%;">
      <n-layout-header bordered style="height: 64px;">
        <nav-bar></nav-bar>
      </n-layout-header>
      <n-layout-content content-style="padding: 18px 80px;">
        <router-view v-slot="{ Component }">
          <!-- <transition name="scale" mode="out-in"> -->
          <transition name="fade" mode="out-in">
            <component :is="Component"/>
          </transition>
        </router-view>
      </n-layout-content>
      <n-layout-footer>
        长春理工大学在线评测系统
        <br />Powered by OnlineJudge Version: 0.0.1
      </n-layout-footer>
    </n-layout>
  </n-message-provider>
</template>
<script>
import { defineComponent} from 'vue'
import NavBar from "./components/NavBar.vue"
export default defineComponent({
  components: {
    NavBar,
  }
})
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.n-layout-content {
  background-color: transparent;
}

.n-layout-footer {
  text-align: center;
}
/* .scale-enter-active,
.scale-leave-active {
  transition: all 0.15s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}  */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fadeInUp-enter-active {
  animation: fadeInUp .8s;
} 

</style>
