const state = {
    count: 0
};

const mutations = {
    add(state, param) {
        state.count += param
    },
    remove(state) {
        state.count--
    }
};

const actions = {
    add: ({commit}, param) => {
        commit('add', param)
    },
    remove: ({commit}) => {
        commit('remove')
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}