import { createApp } from 'vue';
import App from './App.vue';

import('./assets/styles/reset.css');
import('./assets/styles/normalize.css');

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseActions from './components/UI/BaseActions.vue';
import BaseModal from './components/UI/BaseModal.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-actions', BaseActions);
app.component('base-modal', BaseModal);

app.mount('#app');
