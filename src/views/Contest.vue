<template>
    <n-grid x-gap="12" :cols="24">
        <n-gi span="20">
            <n-space vertical>
                <n-card>
                    <n-space vertical :size="20">
                        <n-grid :cols="3" class="contest-title-item">
                            <n-gi>
                                <n-p style="text-align: left;">开始时间：2021-09-25 17:10:16</n-p>
                            </n-gi>
                            <n-gi>
                                <n-h2 style="margin: 0px;text-align: center;">2021青岛大学ACM集训队选拔</n-h2>
                            </n-gi>
                            <n-gi>
                                <n-p style="text-align: right;">结束时间：2021-09-25 17:10:16</n-p>
                            </n-gi>
                        </n-grid>

                        <n-progress
                            type="line"
                            :percentage="60"
                            :indicator-placement="'inside'"
                            status="success"
                            processing
                        />
                        <n-grid x-gap="12" :cols="2" class="contest-title-item">
                            <n-gi>
                                <n-p style="text-align: left;">持续时间: 21:26:59</n-p>
                            </n-gi>
                            <n-gi>
                                <n-p style="text-align: right;">剩余时间: -12:32:51</n-p>
                            </n-gi>
                        </n-grid>
                    </n-space>
                </n-card>
                <n-card>
                    <router-view></router-view>
                </n-card>
            </n-space>
        </n-gi>
        <n-gi span="4">
            <n-card
                class="contest-menu-card"
                style="--padding-top: 0px;--padding-bottom: 0px;--padding-left: 0px;"
            >
                <contest-menu></contest-menu>
                <n-divider style="margin: 0px;" />
                <n-thing class="contest-info-item" title="状态" title-extra="已结束"></n-thing>
                <n-thing class="contest-info-item" title="规则" title-extra="IO"></n-thing>
                <n-thing class="contest-info-item" title="开始于" title-extra="2012-11-01 19:00"></n-thing>
                <n-thing class="contest-info-item" title="结束于" title-extra="2012-11-01 22:30"></n-thing>
                <n-thing class="contest-info-item" title="持续时间" title-extra="3.5 小时"></n-thing>
                <n-thing class="contest-info-item" title="参赛人数" title-extra="477"></n-thing>
            </n-card>
        </n-gi>
    </n-grid>
</template>
<script>
import { defineComponent } from 'vue';
import ContestMenu from '@/components/contest/ContestMenu.vue';
import ContestProblems from './contest/ContestProblems.vue';
export default defineComponent({
    data() {
        return {
            test: ""
        }
    },
    components: {
        ContestMenu
    }
})

</script>

<style>
.contest-info-item {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 12px;
    margin-bottom: 12px;
}
.contest-title-item {
    display: flex;
    align-items: center;
}
</style>