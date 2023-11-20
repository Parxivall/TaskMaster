import Vuetify from 'vuetify';

export default{
  vuetify: {
    theme: {
      dark: true,
    },
  },
  routes: [
    {
      name: 'app',
      path: '/app',
      component: 'pages/app.vue',
    },
    {
      name: 'login',
      path: '/login',
      component: 'pages/login.vue',
    },
  ],
}