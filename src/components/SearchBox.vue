<template>
    <n-input placeholder="搜索">
      <template #prefix>
        <n-icon>
          <search-icon/>
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
export default {
    components: {
        SearchIcon,
        CloseIcon
    }
}
</script>