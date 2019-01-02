import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    number: 0
};

const mutations = {
    increment(state) {
        state.number++;
    },
    decrement(state) {
        state.number--;
    }
};

const actions = {
    increment: ({commit}) => {
        commit('increment')
    },
    decrement: ({commit}) => {
        commit('decrement')
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
})
