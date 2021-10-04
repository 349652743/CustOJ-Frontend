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
        <n-thing title="2021青岛大学ACM集训队选拔" description="2021-9-12 13:10  5 hours "></n-thing>
    </n-list-item>
</template>
<script>
import {
    Ellipse as EllipseIcon
} from "@vicons/ionicons5"

export default {
    components: {
        EllipseIcon
    }
}
</script>