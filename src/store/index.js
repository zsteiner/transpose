import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import instruments from '@/constants/instruments';
import noteTranslator from '@/constants/noteTranslator';

export default new Vuex.Store({
  state: {
    instrument1: {
      ...instruments.piano,
    },
    instrument2: {
      ...instruments['alto-sax'],
    },
    transposeFactor: 3,
    originalNote: {},
    transposedNote: {},
  },
  mutations: {
    SET_INSTRUMENT(state, { selection, instrument }) {
      state[`instrument${selection}`] = instruments[instrument];
    },
    SET_NOTES(state, originalNote) {
      const { transposeFactor } = state;
      let transposedNote;

      if (originalNote + transposeFactor <= 0) {
        transposedNote = originalNote + transposeFactor + 12;
      } else if (originalNote + transposeFactor > 12) {
        transposedNote = originalNote + transposeFactor - 12;
      } else {
        transposedNote = originalNote + transposeFactor;
      }

      state.originalNote = {
        index: originalNote,
        display: noteTranslator[originalNote - 1],
      };
      state.transposedNote = {
        index: transposedNote,
        display: noteTranslator[transposedNote - 1],
      };
    },
    SET_TRANSPOSING(state, transposeFactor) {
      state.transposeFactor = transposeFactor;
    },
  },
  actions: {
    updateSelection({ dispatch, commit }, { selection, instrument }) {
      commit('SET_INSTRUMENT', { selection, instrument });
      dispatch('updateTransposingFactor');
    },
    updateNotes({ commit }, note) {
      commit('SET_NOTES', note);
    },
    updateTransposingFactor({ state, commit }) {
      const transposeFactor =
        state.instrument2.transposeFactor - state.instrument1.transposeFactor;

      commit('SET_TRANSPOSING', transposeFactor);
      commit('SET_NOTES', state.originalNote.index);
    },
  },
  modules: {},
});
