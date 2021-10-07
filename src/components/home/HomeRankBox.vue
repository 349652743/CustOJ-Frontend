<template>
    <n-space vertical :size="12">
        <div style="white-space: nowrap;">
            <n-data-table :bordered="false" :columns="columns" :data="data" />
        </div>
    </n-space>
</template>

<script>
import { h, defineComponent } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'

const createColumns = ({ sendMail }) => {
    return [
        {
            title: 'Name',
            key: 'name'
        },
        {
            title: 'Age',
            key: 'age'
        },
        {
            title: 'Address',
            key: 'address'
        },
        {
            title: 'Tags',
            key: 'tags',
            render(row) {
                const tags = row.tags.map((tagKey) => {
                    return h(
                        NTag,
                        {
                            style: {
                                marginRight: '6px'
                            },
                            type: 'info'
                        },
                        {
                            default: () => tagKey
                        }
                    )
                })
                return tags
            }
        }
    ]
}

const createData = () => [
    {
        key: 0,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
    },
    {
        key: 1,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow']
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    }
]
const message = useMessage()

export default defineComponent({
    data() {
        return {
            data: createData(),
            columns: createColumns({
                sendMail(rowData) {
                    message.info('send mail to ' + rowData.name)
                }
            }),
            pagination: {
                pageSize: 10
            }
        }
    }
})
</script>