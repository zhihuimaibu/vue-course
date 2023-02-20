// https://14-animations-transitions.mat2ja.vercel.app

import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

app.mount('#app');
