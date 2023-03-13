import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'uno.css'
import '@/assets/css/reset.css'
import '@/assets/css/shortCut.css'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import router from '@/router/router'
import 'normalize.css'
import App from './App.vue'

// 引入iconfont
import '@/assets/font/iconfont.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
