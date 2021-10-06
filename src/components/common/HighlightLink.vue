<template>
    <router-link :to="to" style="text-decoration: none;">
    <n-button text @mouseover="mouseOver" @mouseleave="mouseLeave" :style="style">
        <slot></slot>
    </n-button>
    </router-link>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    props: {
        to: Object
    },
    data() {
        return {
            style: "",
            isHighlight: false
        }
    },
    methods: {
        mouseLeave() {
            this.isHighlight = false
            this.style = ""
        },
        mouseOver() {
            this.isHighlight = true
            this.style = "text-decoration: underline;"
        }
    }
})
</script>