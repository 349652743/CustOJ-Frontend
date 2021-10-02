<template>
  <div class="problem" >
    <n-card>
      <n-space vertical :size="15">
        <n-grid :col="24">
        <n-grid-item span="3">
          <search-box></search-box>
        </n-grid-item>
        </n-grid>
        <common-table class="table"></common-table>
      </n-space>
    </n-card>
  </div>
</template>
<script>
import CommonTable from "@/components/CommonTable.vue"
import SearchBox from "@/components/SearchBox.vue"
export default {
  components: {
    CommonTable,
    SearchBox
  }
}
</script>
<style>
.table {
  width: 100%;
  padding: 0px;
}
</style>