import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' // fas代表所有icon,也可以选择按需导入icon

import './styles/index.css'

library.add(fas)

const app = createApp(App)
app.mount('#app')
