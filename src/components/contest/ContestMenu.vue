<template>
  <n-menu @update:value="handleUpdateValue" :options="menuOptions" indent="20"/>
</template>

<script>
import { defineComponent, h, resolveComponent } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import {
  BookOutline as BookIcon,
  BrowsersOutline as BrowsersIcon,
  CellularOutline as CellularIcon,
  ListOutline as ListIcon,
  HomeOutline as HomeIcon
} from '@vicons/ionicons5'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '比赛简介',
    key: 'contest-info',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '题目',
    key: 'contest-problems',
    icon: renderIcon(ListIcon)
  },
  {
    label: '状态',
    key: 'contest-status',
    icon: renderIcon(BrowsersIcon)
  },
  {
    label: '排名',
    key: 'contest-rank',
    icon: renderIcon(CellularIcon)
  },
  {
    label: '公告',
    key: 'contest-notice',
    icon: renderIcon(BookIcon)
  },
]
const message = useMessage()
export default defineComponent({
  data () {
    return {
      menuOptions,
      handleUpdateValue (key, item) {
        // message.info('[onUpdate:value]: ' + JSON.stringify(key))
        // message.info('[onUpdate:value]: ' + JSON.stringify(item))
      }
    }
  }
})
</script>