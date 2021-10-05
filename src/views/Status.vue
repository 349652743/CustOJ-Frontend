<template>
    <n-card>
        <n-space vertical :size="15">
            <n-grid :col="24" x-gap="20" class="status-header">
                <n-grid-item span="4">
                    <n-h2 style="margin: 0px;">评测列表</n-h2>
                </n-grid-item>
                <n-grid-item offset="12" span="8" class="status-header-right">
                    <n-space :size="20" style="display: flex; align-items: center;">
                        <text-selector title="状态"></text-selector>
                        <n-switch style="margin: 0px;">
                            <template #checked>Tag</template>
                            <template #unchecked>Tags</template>
                        </n-switch>

                        <search-box haveTextSelector></search-box>
                    </n-space>
                </n-grid-item>
            </n-grid>
            <status-table></status-table>
        </n-space>
    </n-card>
</template>
<script>
import SearchBox from "@/components/common/SearchBox.vue"
import TextSelector from "@/components/common/TextSelector.vue"
import StatusTable from "@/components/status/StatusTable.vue"
export default {
    components: {
        StatusTable,
        TextSelector,
        SearchBox
    }
}

</script>
<style>
.status-header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.status-header-right {
    display: flex;
    align-items: center;
    justify-content: right;
}
</style>