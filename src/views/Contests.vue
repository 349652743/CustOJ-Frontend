<template>
    <n-card>
        <n-space vertical :size="15">
            <n-grid :col="24" x-gap="0 800:20" class="contests-header" item-responsive>
                <n-grid-item span="12 800:4">
                    <n-h2 style="margin: 0px;">比赛列表</n-h2>
                </n-grid-item>
                <n-grid-item offset="12" span="0 800:8" class="contests-header-right">
                    <n-space :size="20">
                        <text-selector title="规则"></text-selector>
                        <text-selector title="状态"></text-selector>
                        <search-box></search-box>
                    </n-space>
                </n-grid-item>
            </n-grid>
            <n-scrollbar x-scrollable>
                <contest-list></contest-list>
            </n-scrollbar>
        </n-space>
    </n-card>
</template>
<script>
import { defineComponent } from 'vue'
import SearchBox from "@/components/common/SearchBox.vue"
import TextSelector from "@/components/common/TextSelector.vue"
import ContestList from "@/components/contests/ContestList.vue"
export default defineComponent({
    components: {
        ContestList,
        TextSelector,
        SearchBox
    }
})

</script>
<style>
.contests-header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.contests-header-right {
    display: flex;
    align-items: center;
    justify-content: right;
}
</style>