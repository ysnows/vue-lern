import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import count from './modules/page-a'
import number from './modules/page-b'

export default new Vuex.Store({
    modules: {
        count,
        number
    }
})
