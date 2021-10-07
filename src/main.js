import { createApp, defineComponent} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import naive from 'naive-ui'
import 'vfonts/Lato.css'
// import {
// // create naive ui
// create,
// // component
// NButton,
// NLayout,
// NCard
// } from 'naive-ui'

// const naive = create({
// components: [NButton, NLayout, NCard]
// })

const app = createApp(App)
app.use(router)
app.use(naive)
app.mount('#app')

