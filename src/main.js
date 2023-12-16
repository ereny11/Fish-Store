import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'


import './axios'

import router from './router'

import store from './store/index.js'

import Wrapper from './components/Wrapper.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App);

app.use(router);
app.use(store);

app.component("Wrapper", Wrapper);

app.mount("#app");



// createApp(App).use(router, store).component("Wrapper", Wrapper).mount('#app')
