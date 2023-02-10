import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseList from './components/BadgeList.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-list', BaseList);
app.component('the-header', TheHeader);
app.component('user-info', UserInfo);

app.mount('#app');
