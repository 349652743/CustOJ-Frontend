<template>
    <n-list-item>
        <template #prefix>
            <n-image width="60" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </template>
        <template #suffix>
            <n-button type="primary" size="small">
                <template #icon>
                    <n-icon>
                        <ellipse-icon/>
                    </n-icon>
                </template>
                Primary
            </n-button>
        </template>
        <n-space vertical>
            <hilight-link :to="{name:'Contest', params:{id:1}}">
            <h3 class="contest-list-item-title">2021青岛大学ACM集训队选拔</h3>
            </hilight-link>
            <div>2021-9-12 13:10  5 hours </div>
        </n-space>
    </n-list-item>
</template>
<script>
import { defineComponent } from 'vue'
import {
    Ellipse as EllipseIcon
} from "@vicons/ionicons5"
import HilightLink from '@/components/common/HighlightLink.vue'

export default defineComponent({
    components: {
        EllipseIcon,
        HilightLink
    }
})
</script>
<style>
.contest-list-item-title {
    margin: 0px;
    font-size: 18px;
    font-weight: 500;
}
</style>