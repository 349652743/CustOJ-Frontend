<template>
    <n-list>
        <contest-list-item v-for="i in 5"></contest-list-item>
    </n-list>
</template>
<script>
import ContestListItem from "@/components/contests/ContestListItem.vue"
export default {
    components: {
        ContestListItem
    }
}
</script>