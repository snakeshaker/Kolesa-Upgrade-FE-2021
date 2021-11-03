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
    clothes: [],
    accessories: [],
  },
  mutations: {
    updateUser(state, response) {
      state.user = response;
    },
    updateClothes(state, response) {
      state.clothes = response;
    },
    updateAccessories(state, response) {
      state.accessories = response;
    },
  },
  actions: {
    fetchUserInfo({ commit }) {
      axios.get('7ZW3y5GAuIge/data')
        .then((response) => {
          commit('updateUser', response.data);
        });
    },
    fetchClothes({ commit }) {
      axios.get('-_RLsEGjof6i/data')
        .then((response) => {
          commit('updateClothes', response.data);
        });
    },
    fetchAccessories({ commit }) {
      axios.get('q3OPxRyEcPvP/data')
        .then((response) => {
          commit('updateAccessories', response.data);
        });
    },
  },
  modules: {
  },
});
