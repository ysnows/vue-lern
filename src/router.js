import Vue from 'vue';
import VueRouter from 'vue-router';


import pageA from './pages/PageA'
import PageB from './pages/PageB'

const routes = [
    {path: '/', component: pageA},
    {path: '/pageb', component: PageB}
];

Vue.use(VueRouter);
const router = new VueRouter({routes});


export default router;
