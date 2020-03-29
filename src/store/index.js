import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import instruments from '@/constants/instruments';

export default new Vuex.Store({
  state: {
    instrument1: {
      ...instruments.piano,
    },
    instrument2: {
      ...instruments['alto-sax'],
    },
    transposingFactor: 3,
  },
  mutations: {
    UPDATE_INSTRUMENT(state, { selection, instrument }) {
      state[`instrument${selection}`] = instruments[instrument];
    },
  },
  actions: {
    updateSelection({ commit }, { selection, instrument }) {
      commit('UPDATE_INSTRUMENT', { selection, instrument });
    },
  },
  modules: {},
});
