
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import routes from '../src/routes/router';

import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia);
app.use(routes);
app.mount('#app');
