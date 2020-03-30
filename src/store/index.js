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
    instrument2: {},
    transposeFactor: 0,
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
        note: noteTranslator[originalNote - 1].note,
        display: noteTranslator[originalNote - 1].display,
      };
      state.transposedNote = {
        index: transposedNote,
        note: noteTranslator[transposedNote - 1].note,
        display: noteTranslator[transposedNote - 1].display,
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
      if (state.originalNote.note) {
        commit('SET_NOTES', state.originalNote.index);
      }
    },
  },
  modules: {},
});
