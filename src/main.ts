import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.config.compilerOptions.isCustomElement = (tag) => tag === 'scribe-music';
app.use(router).use(store);
app.mount('#app');
