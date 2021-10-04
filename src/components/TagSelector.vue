<template>
  <n-select v-model:value="value"  multiple :options="options">
    <template #action><n-input v-model:value="value" type="text" placeholder="基本的 Input" /></template>
  </n-select>
</template>


<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      value: ref(null),
      options: [
        {
          label: "Everybody's Got Something to Hide Except Me and My Monkey",
          value: 'song0',
        },
        {
          label: 'Drive My Car',
          value: 'song1'
        },
        {
          label: 'Norwegian Wood',
          value: 'song2'
        },
        {
          label: "You Won't See",
          value: 'song3',
        }
      ]
    }
  }
}
</script>