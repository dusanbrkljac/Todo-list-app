import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import modalSame from './components/modalSame.vue'
 
app.component('modal-same', modalSame)

app.mount('#app')
