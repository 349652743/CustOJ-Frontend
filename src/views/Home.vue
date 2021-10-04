<template>
  <div class="home">
    <n-grid y-gap="12" x-gap="12" :cols="24">
      <n-gi span="14">
        <n-space vertical>
          <n-card title="长春理工大学在线评测系统" :segmented="{ content: 'hard' }">
            <home-banner-box></home-banner-box>
          </n-card>
          <n-card title="其它OJ的近期比赛">
            <home-contest-box></home-contest-box>
          </n-card>
        </n-space>
      </n-gi>
      <n-gi span="10">
        <n-space vertical>
          <n-card title="公告" :segmented="{ content: 'hard' }">
            <home-notice-box></home-notice-box>
          </n-card>
          <n-card title="最近7天内AC排名" >
            <home-rank-box></home-rank-box>
          </n-card>
        </n-space>
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
import HomeRankBox from '@/components/home/HomeRankBox.vue'
import HomeContestBox from '@/components/home/HomeContestBox.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    HomeBannerBox,
    HomeNoticeBox,
    HomeRankBox,
    HomeContestBox
  }
}
</script>


