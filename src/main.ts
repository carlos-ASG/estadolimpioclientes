import './assets/main.css'
import './assets/styles/global.css'; // Importa los estilos globales


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './BasePage.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
