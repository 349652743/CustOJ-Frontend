<template>
  <div class="home">
    <!-- <n-space :size="20" justify="center"> -->
    <!-- <n-card style="width: 900px; height: 500px;"> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- </n-card> -->
    <n-card style="height: 500px;">
      <HelloWorld></HelloWorld>
    </n-card>
    <!-- </n-space> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
