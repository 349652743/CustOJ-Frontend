<template>
  <div class="home">
    <n-grid y-gap="12" x-gap="12" :cols="24">
      <n-gi span="14">
        <n-card title="首页轮播图" :segmented="{ content: 'hard' }">
          <home-banner-box></home-banner-box>
        </n-card>
      </n-gi>
      <n-gi span="10">
        <n-card title="公告" :segmented="{ content: 'hard' }">
          <home-notice-box></home-notice-box>
        </n-card>
      </n-gi>
      <n-gi title="近期比赛" span="14">
        <n-card>
          <HelloWorld></HelloWorld>
        </n-card>
      </n-gi>
    </n-grid>

    <!-- </n-space> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HomeBannerBox from '@/components/home/HomeBannerBox.vue'
import HomeNoticeBox from '@/components/home/HomeNoticeBox.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeBannerBox,
    HomeNoticeBox
  }
}
</script>


