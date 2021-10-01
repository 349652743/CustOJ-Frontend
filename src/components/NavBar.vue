<template>
    <n-menu @update:value="handleUpdateValue" v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>
<script>
import { h } from 'vue'
import { RouterLink } from 'vue-router'
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        { to:"/" },
        'Home'
      ),
    key: 'Home',
  },
  {
    label: () =>
      h(
        RouterLink,
        { to:"/about" },
        'About'
      ),
    key: 'About',
  }
]

export default {
    name:"NavBar",
    data() {
        return { 
            activeKey: null,
            menuOptions: menuOptions
        }
    }
}
</script>