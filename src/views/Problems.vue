<template>
  <div class="problem" >
    <n-card>
      <n-space vertical :size="15">
        <n-grid :col="24">
        <n-grid-item span="3">
          <search-box></search-box>
        </n-grid-item>
        </n-grid>
        <problem-table class="table"></problem-table>
      </n-space>
    </n-card>
  </div>
</template>
<script>
import ProblemTable from "@/components/ProblemTable.vue"
import SearchBox from "@/components/SearchBox.vue"
export default {
  components: {
    ProblemTable,
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