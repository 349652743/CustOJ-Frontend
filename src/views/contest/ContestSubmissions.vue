<template>
<status-table></status-table>
</template>
<script>
import { defineComponent } from "@vue/runtime-core";
import StatusTable from "../../components/Status/StatusTable.vue";
export default defineComponent({
    components: {
        StatusTable
    }
})
</script>