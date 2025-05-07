import './assets/main.css'
import './assets/styles/global.css'; // Importa los estilos globales
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa los estilos de Vuetify
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './BasePage.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App)
app.use(vuetify);
app.use(createPinia())
app.use(router)

app.mount('#app')
