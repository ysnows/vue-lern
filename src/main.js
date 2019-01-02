import Vue from 'vue'
import router from './router'
import App from "./App";
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    router,
    template: '<App/>',
    components: {App},
    store
}).$mount('#app');
