import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

let app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(store).use(router).mount('#app')
