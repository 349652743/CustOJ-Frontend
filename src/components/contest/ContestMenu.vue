<template>
    <n-menu @update:value="handleUpdateValue" :options="menuOptions" indent="20" />
</template>

<script>
import { defineComponent, h, resolveComponent } from 'vue'
import { NIcon, useMessage } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
    BookOutline as BookIcon,
    BrowsersOutline as BrowsersIcon,
    CellularOutline as CellularIcon,
    ListOutline as ListIcon,
    HomeOutline as HomeIcon
} from '@vicons/ionicons5'

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'ContestIntroduction', params: { id: 1 } } },
                '简介'
            ),
        key: 'contest-introduction',
        icon: renderIcon(HomeIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'ContestProblems', params: { id: 1 } } },
                '题目'
            ),
        key: 'contest-problems',
        icon: renderIcon(ListIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'ContestSubmissions', params: { id: 1 } } },
                '提交'
            ),
        key: 'contest-submissions',
        icon: renderIcon(BrowsersIcon)
    },
    {
        label: '排名',
        key: 'contest-rank',
        icon: renderIcon(CellularIcon)
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'ContestNotices', params: { id: 1 } } },
                '公告'
            ),
        key: 'contest-notices',
        icon: renderIcon(BookIcon)
    },
]
const message = useMessage()
export default defineComponent({
    data() {
        return {
            menuOptions,
            handleUpdateValue(key, item) {
                // message.info('[onUpdate:value]: ' + JSON.stringify(key))
                // message.info('[onUpdate:value]: ' + JSON.stringify(item))
            }
        }
    }
})
</script>