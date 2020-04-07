import Vue from 'vue'
import App from '@/App.vue'

import './registerServiceWorker'

import router from './router'
import {apolloProvider} from "@/plugins";

Vue.config.productionTip = false

new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app')
