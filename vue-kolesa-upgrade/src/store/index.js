import Vue from 'vue';
import Vuex from 'vuex';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Аноним',
      score: 0,
      avatarUrl: false,
    },
  },
  mutations: {
    updateUser(state, response) {
      state.user = response;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('7ZW3y5GAuIge/data')
        .then((response) => {
          this.user = response.data;
          commit('updateUser', response.data);
        });
    },
  },
  modules: {
  },
});
