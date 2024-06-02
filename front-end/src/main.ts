/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import axios from 'axios';

const app = createApp(App)

app.config.globalProperties.$axios = axios;

registerPlugins(app)

app.mount('#app')

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('Service Worker registered:', registration);
        }).catch(error => {
          console.log('Service Worker registration failed:', error);
        });
      });
    }
  }
  
  registerServiceWorker();