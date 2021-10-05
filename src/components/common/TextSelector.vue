<template>
    <n-popselect v-model:value="value" :options="options" trigger="click">
        <n-button text>
            {{ value || title }}
            <template #icon>
                <n-icon>
                    <caret-down />
                </n-icon>
            </template>
        </n-button>
    </n-popselect>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { CaretDown } from "@vicons/ionicons5"

export default defineComponent({
    props: {
        title: String
    },
    components: {
        CaretDown
    },
    data() {
        return {
            value: ref(null),
            options: [
                {
                    label: '初级',
                    value: 'yong'
                },
                {
                    label: '中级',
                    value: 'defult'
                },
                {
                    label: "高级",
                    value: "hard",
                    disabled: true
                }
            ]
        }
    }
})
</script>