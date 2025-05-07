import './assets/main.css'
import "@mdi/font/css/materialdesignicons.css";
import './assets/styles/global.css'; // Importa los estilos globales
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importa los estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // Importa los íconos de Material Design
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './BasePage.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Usa Material Design Icons
  },
});

const app = createApp(App)
app.use(vuetify);
app.use(createPinia())
app.use(router)

app.mount('#app')
