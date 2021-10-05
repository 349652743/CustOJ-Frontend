<template>
    <n-card>
        <n-space vertical :size="15">
            <n-grid :col="24" x-gap="20" class="contests-header">
                <n-grid-item span="4">
                        <n-h2 style="margin: 0px;">比赛列表</n-h2>
                </n-grid-item>
                <n-grid-item offset="12" span="8" class="contests-header-right">
                    <n-space :size="20">
                        <text-selector title="规则"></text-selector>
                        <text-selector title="状态"></text-selector>
                        <search-box></search-box>
                    </n-space>
                </n-grid-item>
            </n-grid>
            <contest-list></contest-list>
        </n-space>
    </n-card>
</template>
<script>
import SearchBox from "@/components/common/SearchBox.vue"
import TextSelector from "@/components/common/TextSelector.vue"
import ContestList from "@/components/contests/ContestList.vue"
export default {
    components: {
        ContestList,
        TextSelector,
        SearchBox
    }
}

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