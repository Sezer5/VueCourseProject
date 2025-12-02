
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'

// TOAST NOTIFICATION

import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

// FİREBASE 

import {onAuthStateChanged} from 'firebase/auth'
import { AUTH } from './utils/firebase'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'



const vuetify = createVuetify({
  components,
  directives,
})

let app;
onAuthStateChanged(AUTH,()=>{
    if(!app){
      const app = createApp(App)
      app.use(createPinia())
      app.use(router)
      app.use(vuetify)
      app.use(ToastPlugin)
      app.mount('#app')
    }
})


