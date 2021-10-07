<template>
 <n-list style="margin: 0px 0px 10px 0px;">
    <n-list-item>
      <n-alert title="长春理工大学28K杯校赛" type="info">
      导出任务可选择 Excel 或 CSV 格式。 请注意:项目内的任务导出也支持导出字段的设置。 五、任务演示模式 即全屏查看当前任务面板,开启演示模式后,与当前看板无关的内容巧妙地隐藏起...
    </n-alert>
    </n-list-item>
    <n-list-item>
      <n-alert title="比赛须知" type="info">
      Gee it's good to be back home
    </n-alert>
    </n-list-item>
    <n-list-item>
      <n-alert title="ICPC训练赛" type="info">
      Gee it's good to be back home
    </n-alert>
    </n-list-item>
  </n-list>
  <div class="home-notice-pagination">
  <n-pagination v-model:page="page" :page-count="100" :page-slot="5"/>
  </div>
</template>
<script>
import { defineComponent } from "@vue/runtime-core"
export default defineComponent ({
  data() {
    return {
      page: 10
    }
  }
})
</script>
<style>
.home-notice-pagination {
  display: flex;
  justify-content: flex-end;
}
</style>