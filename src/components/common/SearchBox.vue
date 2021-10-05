<template>
  <n-input placeholder="搜索">
    <template #prefix>
      <text-selector v-if="haveTextSelector" ></text-selector>
      <n-icon v-else>
        <search-icon />
      </n-icon>
      
    </template>
    <template #suffix>
      <n-icon>
        <close-icon />
      </n-icon>
    </template>
  </n-input>
</template>
<script>
import {
  Search as SearchIcon,
  Close as CloseIcon
} from "@vicons/ionicons5"
import TextSelector from "@/components/common/TextSelector.vue"

export default {
  props: {
    haveTextSelector : Boolean
  },
  components: {
    SearchIcon,
    CloseIcon,
    TextSelector
  }
}
</script>